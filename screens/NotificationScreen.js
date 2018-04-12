import React, { Component, version } from 'react';
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
var activateOtp1=true,activateOtp2=false,activateOtp3=false,activateOtp4=false;
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from './../customModules/header';
import Gems from './../customModules/cardview';

import RNAccountKit from 'react-native-facebook-account-kit'

export default class NotificationScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
  
   
        header:<CustomHeader title="Notification" back={()=>navigation.goBack()}/>,
        });
    

    constructor(props){
        super(props);
        this.state={

        }
    }

    logout(){
        var self=this;
        RNAccountKit.logout()
        .then(() => {
          console.log('Logged out');
          self.props.navigation.navigate("App");
        })
        .catch(()=>{
            console.log('cannot Log out');
        });
    }

    render() 
    {
        return (
        <View style={{flex:1,backgroundColor:global.WHITE_SOMKE,padding:scale(12)}}>


        <TouchableOpacity onPress={()=>this.logout()}>
            <Text>Logout</Text>
        </TouchableOpacity>
        {/* <View style={{flexDirection:'row',justifyContent:'space-around',}}>
            <Gems gemColor="#01c2e1" tileName="SAP CV" singleLetterColor="#00aec9"/>
            <Gems gemColor="#788cbf" tileName="CV for British Telecom" singleLetterColor="#64729e"/>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:verticalScale(12)}}>
            <Gems gemColor="#fe3c57" tileName="Full Stack for Capillary" singleLetterColor="#e4364f"/>
            <Gems gemColor="#cfa16d" tileName="Full Stack for QikPod" singleLetterColor="#bb9362"/>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:verticalScale(12)}}>
            <Gems gemColor="#9678cf" tileName="Machine Learning" singleLetterColor="#8167b1"/>
            <Gems gemColor="#efbe31" tileName="Create New" singleLetterColor="#d6a000"/>
        </View> */}

        </View>
        );
    }
}