import React, { Component, version } from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  Alert,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './../resources/styles';
import './../global';
import {scale,verticalScale} from './../resources/scale'
import { StackNavigator } from 'react-navigation';
const screenWidth= Dimensions.get('window').width;
import { NavigationActions } from 'react-navigation'
import {resetStackToHome} from './../helpers/functions';
import RNAccountKit from 'react-native-facebook-account-kit'

export default class App extends React.Component {

  constructor(){
    super();
    this.state={
      animating:false
    }
  }

  componentDidMount(){
   // this.waitForSplash();

   RNAccountKit.configure({
    responseType: 'token', // 'token' by default,
    titleType: 'login',
    initialAuthState: '',
    initialEmail: 'anu42686@gmail.com',
    initialPhoneCountryPrefix: '+91',
    initialPhoneNumber: '',
    facebookNotificationsEnabled: true, // true by default
    readPhoneStateEnabled: true, // true by default,
    receiveSMS: true, // true by default,
    countryWhitelist: ['IN'], // [] by default
    countryBlacklist: [], // [] by default
    defaultCountry: 'IN',
  
  })
  }

  initiateLogin(){
    var self=this;
    //self.props.navigation.navigate('Home');
    
    RNAccountKit.loginWithPhone()
    .then((token) => {
      if (!token) {
        console.log('Login cancelled')
      } else {
        console.log('Logged with phone',token);
        /*
        getUser find user phone number and check if it exists in database
        */
        self.getUserInfo(token.token);
        //resetStackToHome(this);
      }
    })
    .catch((err)=>{
      console.log(err);
      //TODO : handle is login is cancelled

    });
  }

  getUserInfo(token){
    var self=this;
    RNAccountKit.getCurrentAccount()
    .then((account) => {
      console.log("info----\n",account);
      // call api and check if user exists or not
      return fetch('http://139.162.45.46/gaminq/checkIfUserExists.php?phone='+account.phoneNumber.number,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: null,
        })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
              animating:false
          });
          console.log(responseJson);
          if(responseJson.length!=0){
            resetStackToHome(this);
          }
          else{
            //Alert.alert("New user");
            self.props.navigation.navigate('CreateUser',{
              token:token,
              phone:account.phoneNumber.number
            });
            //ask for name 
          }
        })
        .catch((error) => {
          console.error(error);
          this.setState({
              animating:false
          });
          Alert.alert("Alert","Some error occured");
        });

    })
    .catch(()=>{
        console.log("Cannot get user info");
    });
  }

  render() 
  {
    return (
      <View style={{flex:1,}}>
        {
          this.state.animating &&
          <ActivityIndicator size="large" color="#000" />
        }
        <Image resizeMode="cover" source={require('./../resources/images/splash.png')} style={{flex:1,width:window.width,height:window.height}}/>

        <View style={{position:'absolute',width:screenWidth}}>

          <View style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:verticalScale(500),}}>
          
            <TouchableOpacity 
            //onPress={()=>this.props.navigation.navigate('Signup')}
            onPress={()=>this.initiateLogin()}
            style={[styles.buttonStyle,{marginTop:verticalScale(0),backgroundColor:'#fff'}]}>
              <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(14),color:global.APP_PRIMARY_COLOR}}>Sign in</Text>
            </TouchableOpacity>

          </View>

        </View>
      </View>
    );
  }
}


