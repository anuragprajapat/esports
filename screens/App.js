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
        <Image source={require('./../resources/images/splash.jpg')} style={{flex:1,width:window.width,height:window.height}}/>

        <View style={styles.overlay}>
        
          <View style={{flex:60,backgroundColor:global.APP_PRIMARY_COLOR,alignItems:'center',justifyContent:'center'}}>
          
            <View style={{flexDirection:'row',height:verticalScale(70),width:scale(70),justifyContent:'space-between'}}>
              <View style={{width:scale(20),height:verticalScale(40),backgroundColor:'#fff',alignSelf:'flex-end'}}></View>
              <View style={{width:scale(20),height:verticalScale(70),backgroundColor:global.APP_ACCENT_COLOR,alignSelf:'flex-end'}}></View>
              <View style={{width:scale(20),height:verticalScale(30),backgroundColor:'#fff',alignSelf:'flex-end'}}></View>
            </View>

            <Text style={{fontFamily:'open_sans_regular',fontSize:verticalScale(25),marginTop:verticalScale(30),color:'#fff'}}>T O P  R E S U M E R</Text>
          
          </View>

          <View style={{flex:40,backgroundColor:global.APP_PRIMARY_COLOR,alignItems:'center',justifyContent:'center'}}>

            {/* <TouchableOpacity style={styles.buttonStyle}>
              <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(14),color:'#3b5998'}}>Sign up with Linkedin</Text>
            </TouchableOpacity> */}
          
            <TouchableOpacity 
            //onPress={()=>this.props.navigation.navigate('Signup')}
            onPress={()=>this.initiateLogin()}
            style={[styles.buttonStyle,{marginTop:verticalScale(20),backgroundColor:global.APP_ACCENT_COLOR}]}>
              <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(14),color:'#fff'}}>Sign in</Text>
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


