import React, { Component } from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import  styles from './../resources/styles';
import { StackNavigator } from 'react-navigation';
import {scale,verticalScale} from './../resources/scale';
import './../global';
import LinearGradient from 'react-native-linear-gradient';
const screenWidth= Dimensions.get('window').width;
var otp1,otp2,otp3,otp4;    
var activateOtp1=true,activateOtp2=false,activateOtp3=false,activateOtp4=false;

import RNAccountKit from 'react-native-facebook-account-kit'

export default class OtpVerifyScreen extends React.Component {

  constructor(props){
    super(props);
    this.state={
      mobileNum:'',
      password:''

    }
  }

  render() 
  {
    return (
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[global.APP_PRIMARY_COLOR, global.APP_TERTIARY_COLOR]} style={{flex:1,alignItems:'center'}}>

        <TouchableOpacity 
        onPress={()=>this.props.navigation.goBack()}
        style={{alignSelf:'flex-start',padding:verticalScale(25),}}>
          <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(16),color:'#fff'}}>Back</Text>
        </TouchableOpacity>

        <Text style={{fontFamily:'open_sans_regular',color:'#fff',fontSize:verticalScale(15)}}>OTP sent to +91-123457789     </Text>
        <Text style={{fontFamily:'open_sans_regular',color:'#fff',fontSize:verticalScale(15)}}> </Text>
        
        <View style={{flexDirection:'row',justifyContent:'space-around',width:screenWidth/1.3}}>

        </View>

          <TouchableOpacity style={[styles.buttonStyle,{marginTop:verticalScale(40),backgroundColor:global.APP_ACCENT_COLOR}]}>
              <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(14),color:'#fff'}}>Sign up</Text>
          </TouchableOpacity>
       
      </LinearGradient>
    );
  }
}