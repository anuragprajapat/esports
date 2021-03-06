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

export default class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
  
        title: 'Home',
        header:<CustomHeader title="Home" back={()=>navigation.goBack()}/>,
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
        <View style={{flex:1,backgroundColor:'#f8f8f8',padding:scale(12),alignContent:'center',justifyContent:'center'}}>
            <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('CreateAuction')}
                style={{padding:scale(15),backgroundColor:global.APP_PRIMARY_COLOR}}>
                <Text style={{color:'#fff',textAlign:'center',fontFamily:'open_sans_regular'}}>Create an Auction</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Join')} style={{padding:scale(15),backgroundColor:global.APP_PRIMARY_COLOR,marginTop:verticalScale(20)}}>
                <Text style={{color:'#fff',fontFamily:'open_sans_regular',textAlign:'center'}}>Join an Auction</Text>
            </TouchableOpacity>


        </View>
        );
    }
}