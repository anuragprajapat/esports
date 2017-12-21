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


export default class LoginScreen extends React.Component {

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
          
          <Text style={{fontFamily:'open_sans_regular',width:screenWidth/1.4,fontSize:verticalScale(12),color:'#5e79a8',}}>Phone number</Text>
        
          <TextInput
            underlineColorAndroid='#5e79a8'
            style={{fontFamily:'open_sans_regular',fontSize:verticalScale(16),color:'#fff',width:screenWidth/1.4}}
            onChangeText={(text) => this.setState({mobileNum:text})}
            value={this.state.mobileNum}
            autoCorrect={false}
            keyboardType="phone-pad"
            selectionColor="#5e79a8"
            autoFocus={true}
            placeholder=""
          />


          <Text style={{fontFamily:'open_sans_regular',width:screenWidth/1.4,fontSize:verticalScale(12),color:'#5e79a8',}}>Password</Text>
        
          <TextInput
            underlineColorAndroid='#5e79a8'
            style={{fontFamily:'open_sans_regular',fontSize:verticalScale(16),color:'#fff',width:screenWidth/1.4}}
            onChangeText={(text) => this.setState({password:text})}
            value={this.state.password}
            autoCorrect={false}
            placeholder=""
            selectionColor="#5e79a8"
            secureTextEntry={true}
          />

          <TouchableOpacity style={[styles.buttonStyle,{marginTop:verticalScale(40),backgroundColor:global.APP_ACCENT_COLOR}]}>
              <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(14),color:'#fff'}}>Sign up</Text>
          </TouchableOpacity>
       
      </LinearGradient>
    );
  }
}