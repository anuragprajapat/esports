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
import Icon from 'react-native-vector-icons/FontAwesome';

class Gems extends Component {
    

    constructor(props) {
        super(props)
        }
    render() {
        return (
        // <TouchableOpacity style={styles.postContainer} onPress={this.props.postPressed}>
        // <View style={styles.userInformations}>
        // <Image source={{uri: ‘this.props.post.userPicture’}} /> 
        // <Text>this.props.post.userName</Text>
        // </View>
        // <Text style={styles.status}>this.props.post.thoughts</Text></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:this.props.gemColor,elevation:5,width:scale(152),height:scale(152),borderRadius:verticalScale(6)}}>
            {
                this.props.tileName && this.props.tileName == 'Create New' &&
                <View style={{flex:1,position:'absolute',alignItems:'center',paddingLeft:scale(10),justifyContent:'center',height:scale(152),width:scale(152),}}>
                    <Text style={{fontFamily:'open_sans_bold',fontSize:scale(90),color:this.props.singleLetterColor}}>{'+'}</Text>
                </View>
            }
            {
                this.props.tileName && this.props.tileName != 'Create New' &&
                <View style={{flex:1,position:'absolute',alignItems:'flex-start',paddingLeft:scale(10),justifyContent:'flex-start',height:scale(152),width:scale(152),}}>
                    <Text style={{fontFamily:'open_sans_bold',fontSize:scale(90),color:this.props.singleLetterColor}}>{this.props.tileName && this.props.tileName.charAt(0).toUpperCase()}</Text>
                </View>
            }
            
            <View style={{flex:1,position:'absolute',alignItems:'flex-start',paddingLeft:scale(10),justifyContent:'flex-start',height:scale(152),width:scale(152),}}>
               <Text style={{fontFamily:'open_sans_bold',fontSize:scale(90),color:this.props.singleLetterColor}}>{this.props.tileName && this.props.tileName != 'Create New' ?this.props.tileName.charAt(0).toUpperCase():'+'}</Text>
            </View>
            <View style={{flex:1,justifyContent:'flex-end'}}>
                <Text style={{fontFamily:'open_sans_bold',color:'#f8f8f8',fontSize:verticalScale(16),padding:verticalScale(20),textAlign:'right'}}>{this.props.tileName}</Text>
            </View>
          
        </TouchableOpacity>
        )
        }
}
export default Gems;