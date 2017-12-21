import React, { Component } from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { AppRegistry } from 'react-native';
import  styles from './../resources/styles';
import { StackNavigator } from 'react-navigation';
import {scale,verticalScale} from './../resources/scale';
import { NavigationActions } from 'react-navigation'
import './../global';

import RNAccountKit from 'react-native-facebook-account-kit'

// screens

import LoginScreen from './Login';
import App from './App';
import SignupScreen from './Signup';
import OtpVerifyScreen from './OtpVerify';
import HomeScreen from './Home';

// screens


export default class SplashScreen extends React.Component {

    componentDidMount(){
        var self=this;
        RNAccountKit.getCurrentAccessToken()
        .then((token) => {
            if(token==null){
                console.log("Access TOKEN not found...",err);
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'App'})
                    ]
                  })
                  this.props.navigation.dispatch(resetAction)
            }
            else{
                console.log("Access Token Found...",token);
                self.getUserInfo();
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Home'})
                    ]
                  })
                  this.props.navigation.dispatch(resetAction)
            }
            
        })
        .catch((err)=>{
            console.log("Access TOKEN not found...",err);
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'App'})
                ]
              })
              this.props.navigation.dispatch(resetAction)
        });
    }

    getUserInfo(){
        RNAccountKit.getCurrentAccount()
        .then((account) => {
          console.log("info----\n",account)
        })
        .catch(()=>{
            console.log("Cannot get user info");
        });
    }

  render() 
  {
    return (
        <View style={{flex:1,}}>
        <Image source={require('./../resources/images/splash.jpg')} style={{flex:1,width:window.width,height:window.height}}/>

        <View style={styles.overlay}>
        
          <View style={{flex:1,backgroundColor:global.APP_PRIMARY_COLOR,alignItems:'center',justifyContent:'center'}}>
          
            <View style={{flexDirection:'row',height:verticalScale(70),width:scale(70),justifyContent:'space-between'}}>
              <View style={{width:scale(20),height:verticalScale(40),backgroundColor:'#fff',alignSelf:'flex-end'}}></View>
              <View style={{width:scale(20),height:verticalScale(70),backgroundColor:global.APP_ACCENT_COLOR,alignSelf:'flex-end'}}></View>
              <View style={{width:scale(20),height:verticalScale(30),backgroundColor:'#fff',alignSelf:'flex-end'}}></View>
            </View>

            <Text style={{fontFamily:'open_sans_regular',fontSize:verticalScale(25),marginTop:verticalScale(30),color:'#fff'}}>T O P  R E S U M E R</Text>
          
          </View>
        </View>
      </View>
    );
  }
}


const RootNav = StackNavigator({
    Splash: {screen: SplashScreen,
        navigationOptions: {
            header: null
        }   
    },
    App: {screen: App,
        navigationOptions: {
            header: null
        }
    },
    Login:{screen:LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    Signup: {screen: SignupScreen,
        navigationOptions: {
            header: null
        }
    },
    Otp: {screen: OtpVerifyScreen,
        navigationOptions: {
            header: null
        }
    },
    Home: {screen: HomeScreen},
  });



AppRegistry.registerComponent('ryzume', () => RootNav);