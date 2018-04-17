import React, { Component, version } from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  Alert,
  ActivityIndicator,
  Keyboard,
  AsyncStorage,
  FlatList,
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
import Modal from 'react-native-simple-modal';
//import { postReq, getReq,sendRequest } from 'fetch-wrapper'

import RNAccountKit from 'react-native-facebook-account-kit'

export default class JoinAuctionScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
  
        title: 'Home',
        header:<CustomHeader title="My Leagues" back={()=>navigation.goBack()}/>,
        });
    

    constructor(props){
        super(props);
        this.state={
            auctions:[],
            animating:false,
            modalStatus:false,
            activeAuction:'',
            accessKey:''
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
    async getAuctions() {
        var phone=value = await AsyncStorage.getItem('phone');
        this.setState({
            animating:true
        });
        return fetch('http://139.162.45.46/gaminq/listParticipatingAuctions.php?userId='+phone)
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

    // getAuctions(){
    //     sendRequest({
    //         request: getReq('http://139.162.45.46/gaminq/getauctions.php'), //this should be a function that returns a fetch request 
    //         responseType: 'json',
    //         onSuccess: json => { 
    //             //on success code here 
    //             console.log(json);
    //         }, 
    //         onError: error => { 
    //             //on error code here 
    //             console.log(error);
    //         } 
    //       });
    // }

   componentDidMount(){
    this.getAuctions();
       //console.log(res);
   }

   

    render() 
    {
        return (
            <View style={{flex:1}}>
            {
               this.state.animating &&
                <ActivityIndicator size="large" color="#000" />
            }
            <ScrollView style={{flex:1,height:verticalScale(300)}} contentContainerStyle={{backgroundColor:'#f8f8f8',padding:scale(12),}}>
        
            <FlatList
            data={this.state.auctions}
            renderItem={({ item }) => (
            <View style={{backgroundColor:'#fff',borderRadius:verticalScale(3),elevation:3,padding:scale(10),marginBottom:verticalScale(10)}}>
                <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(18)}}>{item.name}</Text>
                <Text style={{fontFamily:'open_sans_regular',fontSize:verticalScale(18)}}>Ends in : {item.endTime} days</Text>
                <TouchableOpacity onPress={()=>this.setState({
                    modalStatus:true,
                    activeAuction:{
                        name:item.name,
                        id:item.id
                    }
                })} style={{alignSelf:'flex-end',padding:scale(5),backgroundColor:global.APP_PRIMARY_COLOR,marginTop:verticalScale(20),width:scale(100),borderRadius:verticalScale(3),}}>
                <Text style={{color:'#fff',fontFamily:'open_sans_bold',textAlign:'center',fontSize:verticalScale(18)}}>Enter</Text>
                </TouchableOpacity>
            </View>

            )}
        //keyExtractor={item.id}
      />

        </ScrollView>
        
            </View>
        );
    }
}