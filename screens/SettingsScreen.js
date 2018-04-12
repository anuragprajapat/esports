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

export default class SettingsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        header:<CustomHeader title="Settings" back={()=>navigation.goBack()}/>,
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
        <View style={{flex:1,backgroundColor:'#161616',paddingLeft:scale(12),paddingRight:scale(12)}}>
            <TouchableOpacity style={{flexDirection:'row',borderBottomColor:'#1b1f20',borderBottomWidth:verticalScale(2),paddingBottom:verticalScale(20),paddingTop:verticalScale(20)}}>
                <View style={{flex:1}}>
                    <Icon name="home" size={verticalScale(20)} color="#dfdfdf" />
                </View>
                <View style={{flex:9}}>
                    <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(16),color:'#dfdfdf'}}>MY PROFILE</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row',borderBottomColor:'#1b1f20',borderBottomWidth:verticalScale(2),paddingBottom:verticalScale(20),paddingTop:verticalScale(20)}}>
                <View style={{flex:1}}>
                    <Icon name="suitcase" size={verticalScale(20)} color="#dfdfdf" />
                </View>
                <View style={{flex:9}}>
                    <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(16),color:'#dfdfdf'}}>AUCTIONS</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row',borderBottomColor:'#1b1f20',borderBottomWidth:verticalScale(2),paddingBottom:verticalScale(20),paddingTop:verticalScale(20)}}>
                <View style={{flex:1}}>
                    <Icon name="trophy" size={verticalScale(20)} color="#dfdfdf" />
                </View>
                <View style={{flex:9}}>
                    <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(16),color:'#dfdfdf'}}>TOURNAMENTS</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row',borderBottomColor:'#1b1f20',borderBottomWidth:verticalScale(2),paddingBottom:verticalScale(20),paddingTop:verticalScale(20)}}>
                <View style={{flex:1}}>
                    <Icon name="cog" size={verticalScale(20)} color="#dfdfdf" />
                </View>
                <View style={{flex:9}}>
                    <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(16),color:'#dfdfdf'}}>SETTINGS</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row',borderBottomColor:'#1b1f20',borderBottomWidth:verticalScale(2),paddingBottom:verticalScale(20),paddingTop:verticalScale(20)}}>
                <View style={{flex:1}}>
                    <Icon name="star" size={verticalScale(20)} color="#dfdfdf" />
                </View>
                <View style={{flex:9}}>
                    <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(16),color:'#dfdfdf'}}>LEADERBOARD</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row',borderBottomColor:'#1b1f20',borderBottomWidth:verticalScale(2),paddingBottom:verticalScale(20),paddingTop:verticalScale(20)}}>
                <View style={{flex:1}}>
                    <Icon name="desktop" size={verticalScale(20)} color="#dfdfdf" />
                </View>
                <View style={{flex:9}}>
                    <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(16),color:'#dfdfdf'}}>LIVE GAMES</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                this.logout()
            }}
            style={{flexDirection:'row',borderBottomColor:'#1b1f20',borderBottomWidth:verticalScale(2),paddingBottom:verticalScale(20),paddingTop:verticalScale(20)}}>
                <View style={{flex:1}}>
                    <Icon name="sign-out" size={verticalScale(20)} color="#dfdfdf" />
                </View>
                <View style={{flex:9}}>
                    <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(16),color:'#dfdfdf'}}>LOG OUT</Text>
                </View>
            </TouchableOpacity>
        </View>
        );
    }
}