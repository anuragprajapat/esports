'use strict';
var React = require('react-native');
var {
StyleSheet,
Dimensions
} = React;
const { width, height } = Dimensions.get('window');
import {scale,verticalScale} from './scale';

module.exports = StyleSheet.create({

    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.9,
        width: width,
        height:height
      },
    buttonStyle:{
        backgroundColor:'#fff',
        elevation:4,
        width:width/1.4,
        alignItems:'center',
        paddingTop:verticalScale(12),
        paddingBottom:verticalScale(12),
        borderRadius:scale(20)
    }
});