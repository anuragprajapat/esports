import React, { Component, version } from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  Alert,
  Text,
  Keyboard,
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
import {resetStackToHome} from './../helpers/functions';

import RNAccountKit from 'react-native-facebook-account-kit'

export default class CreateUserScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
  
        title: 'Create Account',
        header:<CustomHeader title="Create Account" back={()=>navigation.goBack()}/>,
        });
    

    constructor(props){
        super(props);
        this.state={
            name:'',
            animating:false
        }
    }

    componentDidMount(){

        const { params } = this.props.navigation.state;
        console.log(params)
    }


    createNewUser(){

        const { params } = this.props.navigation.state;
        var self=this;

        self.setState({
            animating:true
        });
        console.log(JSON.stringify({
            name: self.state.name,
            token: params.token,
            phone:params.phone
        }));

        return fetch('http://139.162.45.46/gaminq/userDetails.php',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: self.state.name,
            token: params.token,
            phone:params.phone
        }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
              animating:false
          });
          console.log(responseJson);
          resetStackToHome(self);
        })
        .catch((error) => {
          console.error(error);
          this.setState({
              animating:false
          });
          Alert.alert("Alert","Some error occured");
        });

    }

    render() 
    {
        const {state}=this.props.navigation;
        return (
        <View style={{flex:1,backgroundColor:'#f8f8f8',padding:scale(12),alignContent:'center',justifyContent:'center'}}>
            {
            this.state.animating &&
            <ActivityIndicator size="large" color="#000" />
            }
            <Text style={{fontFamily:'open_sans_regular',fontSize:scale(18),textAlign:'center',paddingBottom:verticalScale(20)}}>Welcome to Gaminq!</Text>
           <TextInput
                placeholder="Your name"
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({name:text})}
                underlineColorAndroid="#f8f8f8"
                value={this.state.name}
            />
            <TouchableOpacity onPress={()=>{Keyboard.dismiss();this.createNewUser()}} style={{padding:scale(15),backgroundColor:global.APP_PRIMARY_COLOR,marginTop:verticalScale(20)}}>
                <Text style={{color:'#fff',fontFamily:'open_sans_regular',textAlign:'center'}}>Create Account</Text>
            </TouchableOpacity>

        </View>
        );
    }
}