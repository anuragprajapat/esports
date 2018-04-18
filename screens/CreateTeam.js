import React, { Component, version } from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  ActivityIndicator,
  AsyncStorage,
  TouchableOpacity,
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

import RNAccountKit from 'react-native-facebook-account-kit'

export default class CreateTeamScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
  
        title: 'Create Account',
        header:<CustomHeader title="Make Your Team" back={()=>navigation.goBack()}/>,
        });
    

    constructor(props){
        super(props);
        this.state={
            teamName:''
        }
    }

    async createTeam(){
        const {params}=this.props.navigation.state;
        console.log(params);
        this.setState({
            animating:true
        });
        var phone=value = await AsyncStorage.getItem('phone');
        return fetch('http://139.162.45.46/gaminq/createTeam.php?userId='+phone+'&teamName='+this.state.teamName+'&auctionId='+params.activeAuction.id)
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
                auctions:responseJson,
                animating:false
            });
          })
          .catch((error) => {
            console.error(error);
            this.setState({
                animating:false
            });
        });
    }

    componentDidMount(){
    
    }

    
    render() 
    {
        const {params}=this.props.navigation.state;
        return (
        <View style={{flex:1,backgroundColor:'#f8f8f8',padding:scale(12),alignContent:'center',justifyContent:'center'}}>
            {
               this.state.animating &&
                <ActivityIndicator size="large" color="#000" />
            }
            <Text style={{fontFamily:'open_sans_bold',textAlign:'center',marginBottom:verticalScale(30)}}>{params.activeAuction.name}</Text>
            <TextInput
                    placeholder="Your team name"
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({teamName:text})}
                    underlineColorAndroid="#f8f8f8"
                    autoFocus={true}
                    value={this.state.teamName}
                />
            
            <TouchableOpacity onPress={()=>this.createTeam()} style={{padding:scale(15),backgroundColor:global.APP_PRIMARY_COLOR,marginTop:verticalScale(20)}}>
                <Text style={{color:'#fff',fontFamily:'open_sans_regular',textAlign:'center'}}>Make Team</Text>
            </TouchableOpacity>

        </View>
        );
    }
}