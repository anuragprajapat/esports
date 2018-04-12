import React, { Component, version } from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './../resources/styles';
import './../global';
import {scale,verticalScale} from './../resources/scale'
import { StackNavigator } from 'react-navigation';
const screenWidth= Dimensions.get('window').width;
import { NavigationActions } from 'react-navigation'

import RNAccountKit from 'react-native-facebook-account-kit'

export default class App extends React.Component {

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
        
        // TODO save the token in the api
        
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home'})
          ]
        })
        this.props.navigation.dispatch(resetAction)
        
        

        /*
        *Also save or update user's phone number as verified in Top Resumer DB
        */
        //self.props.navigation.navigate('Home');
      }
    })
    .catch((err)=>{
      console.log(err);
      //TODO : handle is login is cancelled

    });
  }

  waitForSplash(){
    var self=this;
    setTimeout(function(){
      self.props.navigation.navigate();
    },3000);
  }
  render() 
  {
    return (
      <View style={{flex:1,}}>
        <Image resizeMode="cover" source={require('./../resources/images/splash.png')} style={{flex:1,width:window.width,height:window.height}}/>

        <View style={{position:'absolute',width:screenWidth}}>
        
        

          <View style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:verticalScale(500),}}>

            {/* <TouchableOpacity style={styles.buttonStyle}>
              <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(14),color:'#3b5998'}}>Sign up with Linkedin</Text>
            </TouchableOpacity> */}
          
            <TouchableOpacity 
            //onPress={()=>this.props.navigation.navigate('Signup')}
            onPress={()=>this.initiateLogin()}
            style={[styles.buttonStyle,{marginTop:verticalScale(0),backgroundColor:'#fff'}]}>
              <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(14),color:global.APP_PRIMARY_COLOR}}>Sign in</Text>
            </TouchableOpacity>

            {/* <View style={{flexDirection:'row',marginTop:verticalScale(20)}}>
              <Text style={{fontFamily:'open_sans_regular',color:'#fff',fontSize:verticalScale(15)}}>Already have an account? </Text>
              <TouchableOpacity>
                <Text 
                onPress={()=>this.props.navigation.navigate('Login')}
                style={{fontFamily:'open_sans_bold',color:'#fff',fontSize:verticalScale(15)}}> Sign In</Text>
              </TouchableOpacity>
            </View> */}

          </View>

        </View>
      </View>
    );
  }
}


