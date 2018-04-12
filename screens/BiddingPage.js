import React, { Component, version } from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  Picker
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
import RNAccountKit from 'react-native-facebook-account-kit'

export default class BiddingPageScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
  
        title: 'Home',
        header:<CustomHeader title="Bid" back={()=>navigation.goBack()}/>,
        });
    

    constructor(props){
        super(props);
        this.state={
            country:'1',
            modalStatus:false
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
        <View style={{flex:1,backgroundColor:global.WHITE_SMOKE}}>

        <Text style={{fontFamily:'open_sans_regular',fontSize:verticalScale(18),marginBottom:verticalScale(15),marginTop:verticalScale(15),textAlign:'center'}}> Amount Left: Rs 12,000</Text>
        <Picker
        style={{height:verticalScale(30),margin:verticalScale(10),}}
        selectedValue={this.state.country}
        onValueChange={(itemValue, itemIndex) => this.setState({country: itemValue})}>
            <Picker.Item label="Australia" value="1" />
            <Picker.Item label="India" value="2" />
            <Picker.Item label="New Zealand" value="3" />
            <Picker.Item label="England" value="4" />
            <Picker.Item label="Pakistan" value="5" />
            <Picker.Item label="South Africa" value="6" />
            <Picker.Item label="West Indies" value="7" />
            <Picker.Item label="Sri Lanka" value="8" />
            <Picker.Item label="Bangladesh" value="9" />
            <Picker.Item label="Zimbabwe" value="10" />
            <Picker.Item label="Afghanistan" value="11" />
            <Picker.Item label="Ireland" value="12" />
            <Picker.Item label="Nepal" value="13" />
            <Picker.Item label="UAE" value="14" />
        </Picker>
        <ScrollView style={{flex:1,height:verticalScale(300)}} contentContainerStyle={{backgroundColor:'#f8f8f8',paddingLeft:scale(7),paddingRight:scale(7),}}>
            
        
            
            <View style={{backgroundColor:'#fff',borderRadius:verticalScale(3),elevation:3,padding:scale(10)}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image source={require('./../resources/images/splash.jpg')} style={{height:scale(60),width:scale(60),borderRadius:scale(30)}}/>
                    </View>
                    <View onPress={()=>this.props.navigation.navigate('CreateTeam')} style={{flex:2,padding:scale(5),borderRadius:verticalScale(3),}}>
                        <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(18)}}>Sachin Tendulkar (997)</Text>
                        <Text style={{fontFamily:'open_sans_regular',fontSize:verticalScale(16)}}>Base Price: Rs.10,000</Text>
                        <Text style={{fontFamily:'open_sans_regular',fontSize:verticalScale(16)}}>Current Price: Rs.10,000</Text>
                    </View>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>this.setState({
                            modalStatus:true
                        })} style={{flex:1,padding:scale(5),backgroundColor:global.APP_PRIMARY_COLOR,margin:verticalScale(5),width:scale(70),borderRadius:verticalScale(3),}}>
                            <Text style={{color:'#fff',fontFamily:'open_sans_bold',textAlign:'center',fontSize:verticalScale(18)}}>Buy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('CreateTeam')} style={{flex:1,padding:scale(5),backgroundColor:global.APP_PRIMARY_COLOR,margin:verticalScale(5),width:scale(70),borderRadius:verticalScale(3),}}>
                            <Text style={{color:'#fff',fontFamily:'open_sans_bold',textAlign:'center',fontSize:verticalScale(18)}}>Bid</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{backgroundColor:'#fff',borderRadius:verticalScale(3),elevation:3,padding:scale(10),marginTop:verticalScale(5),marginBottom:verticalScale(5)}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image source={require('./../resources/images/splash.jpg')} style={{height:scale(60),width:scale(60),borderRadius:scale(30)}}/>
                    </View>
                    <View onPress={()=>this.props.navigation.navigate('CreateTeam')} style={{flex:2,padding:scale(5),borderRadius:verticalScale(3),}}>
                        <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(18)}}>Sachin Tendulkar (997)</Text>
                        <Text style={{fontFamily:'open_sans_regular',fontSize:verticalScale(16)}}>Base Price: Rs.10,000</Text>
                        <Text style={{fontFamily:'open_sans_regular',fontSize:verticalScale(16)}}>Current Price: Rs.10,000</Text>
                    </View>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('CreateTeam')} style={{flex:1,padding:scale(5),backgroundColor:global.APP_PRIMARY_COLOR,margin:verticalScale(5),width:scale(70),borderRadius:verticalScale(3),}}>
                            <Text style={{color:'#fff',fontFamily:'open_sans_bold',textAlign:'center',fontSize:verticalScale(18)}}>Buy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('CreateTeam')} style={{flex:1,padding:scale(5),backgroundColor:global.APP_PRIMARY_COLOR,margin:verticalScale(5),width:scale(70),borderRadius:verticalScale(3),}}>
                            <Text style={{color:'#fff',fontFamily:'open_sans_bold',textAlign:'center',fontSize:verticalScale(18)}}>Bid</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
           




            
           
        </ScrollView>
        <Modal
        open={this.state.modalStatus}
        offset={0}
        overlayBackground="rgba(0, 0, 0, 0.75)"
        //animationDuration={200}
        //animationTension={40}
        modalDidOpen={() => undefined}
        modalDidClose={() => {
            this.setState({
                modalStatus:false
            });
        }}
        closeOnTouchOutside={true}
        containerStyle={{
            justifyContent: 'center'
        }}
        modalStyle={{
            borderRadius: 2,
            margin: 20,
            padding: 10,
            backgroundColor: '#F5F5F5'
        }}
        disableOnBackPress={true}>
            <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(18),marginBottom:verticalScale(15),marginTop:verticalScale(15),textAlign:'center'}}>Bidding for Sachin Tendulkar</Text>
            <TextInput
                placeholder="Bid Amount"
                keyboardType='numeric'
                autoFocus={true}
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                underlineColorAndroid="#f8f8f8"
                value={this.state.text}
            />
            <TouchableOpacity onPress={()=>{Keyboard.dismiss();this.props.navigation.navigate('Bidding')}} style={{padding:scale(15),backgroundColor:global.APP_PRIMARY_COLOR,marginTop:verticalScale(20)}}>
                <Text style={{color:'#fff',fontFamily:'open_sans_regular',textAlign:'center'}}>Place Bid</Text>
            </TouchableOpacity>
        </Modal>
        </View>
        );
    }
}