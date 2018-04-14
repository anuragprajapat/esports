import React, { Component, version } from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  Text,
  ActivityIndicator,
  DatePickerAndroid,
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
import SelectMultiple from 'react-native-select-multiple'

import DateTimePicker from 'react-native-modal-datetime-picker';

 
const teams = [
  { label: 'Australia', value: '1' },
  { label: 'India', value: '2' },
  { label: 'New Zealand', value: '3' },
  { label: 'England', value: '4' },
  { label: 'Pakistan', value: '5' },
  { label: 'South Africa', value: '6' },
  { label: 'West Indies', value: '7' },
  { label: 'Sri Lanka', value: '8' },
  { label: 'Bangaldesh', value: '9' },
  { label: 'Zimbabwe', value: '10' },
  { label: 'Afghanistan', value: '11' },
  { label: 'Ireland', value: '12' },
  { label: 'Nepal', value: '13' },
  { label: 'UAE', value: '14' },
]
import RNAccountKit from 'react-native-facebook-account-kit'
import { getKey } from '../helpers/functions';

export default class CreateAuctionScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
  
        title: 'Create Auction',
        header:<CustomHeader title="CreateAuction" back={()=>navigation.goBack()}/>,
        });
    

    constructor(props){
        super(props);
        this.state={
            auctionName:'',
            isDateTimePickerVisible: false,
            selectedDate:'No date Selected',
            selectedFruits:[],
            animating:false

        }
    }
    onSelectionsChange = (sf) => {
        // selectedFruits is array of { label, value }
        console.log(sf);
        this.setState({ selectedFruits:sf })
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  
    _handleDatePicked = (date) => {
      console.log('A date has been picked: ', date);
      this.setState({
          selectedDate:date
      });
      this._hideDateTimePicker();
    };

    createAuction(){
        console.log(this.state.auctionName,this.state.selectedFruits,this.state.selectedDate);
        var str="";
        if(this.state.auctionName=="" || this.state.selectedFruits.length==0 || this.state.selectedDate=='No date Selected'){
            ToastAndroid.show('Please fill up details of auction !', ToastAndroid.SHORT);
        }
        else{
            for(var i=0;i<this.state.selectedFruits.length;i++){
                str+=this.state.selectedFruits[i].value+","
            }
    
            this.setState({
                animating:true
            });
            var phone=getKey('phone');
            console.log(phone);
    
            return fetch('http://139.162.45.46/gaminq/createAuction.php',{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    auctionName: this.state.auctionName,
                    countriesAllowed: str,
                    endTime:this.state.selectedDate,
                    createdBy:phone
                }),
                })
              .then((response) => response.json())
              .then((responseJson) => {
                this.setState({
                    auctions:responseJson,
                    animating:false
                });
                console.log(responseJson);
                this.props.navigation.navigate('Join');
                ToastAndroid.show('Auction created successfuly !', ToastAndroid.SHORT);
              })
              .catch((error) => {
                console.error(error);
                this.setState({
                    animating:false
                });
                Alert.alert("Alert","Some error occured");
              });
        }

        
    }
  


    render() 
    {
        return (
        <View style={{flex:1,backgroundColor:'#f8f8f8',padding:scale(12),alignContent:'center',}}>

            {
               this.state.animating &&
                <ActivityIndicator size="large" color="#000" />
            }
            <TextInput
                placeholder="Auction Name"
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({auctionName:text})}
                underlineColorAndroid="#f8f8f8"
                value={this.state.text}
            />

            <Text style={{color:'#4a4a4a',textAlign:'left',fontFamily:'open_sans_bold',marginTop:verticalScale(5),marginBottom:verticalScale(5)}}>Select Participating Teams</Text>

            <SelectMultiple
            items={teams}
            selectedItems={this.state.selectedFruits}
            onSelectionsChange={this.onSelectionsChange} />

            <Text style={{color:'#4a4a4a',textAlign:'left',fontFamily:'open_sans_bold',marginTop:verticalScale(5),marginBottom:verticalScale(5)}}>Auction Ends on</Text>
            
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={this._showDateTimePicker} style={{flex:1, padding:verticalScale(10),backgroundColor:'#4a4a4a',borderRadius:5,width:scale(100),alignItems:'center',}}>
                    <Text style={{color:'#fff',fontFamily:'open_sans_regular'}}>Pick date</Text>
                </TouchableOpacity>
                <Text style={{flex:2}}>{this.state.selectedDate.toString()}</Text>
            </View>

            <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            />

            <TouchableOpacity onPress={()=>{
                this.createAuction()
            }}
            style={{padding:scale(15),backgroundColor:global.APP_PRIMARY_COLOR,marginTop:verticalScale(10)}}>
                <Text style={{color:'#fff',textAlign:'center',fontFamily:'open_sans_regular'}}>Create Auction</Text>
            </TouchableOpacity>

        </View>
        );
    }
}