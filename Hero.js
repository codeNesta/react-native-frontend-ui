//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// create a component
class Hero extends Component {
    render() {
        return (
            <View style={{marginTop:10, elevation:2}}>
                            <ImageBackground imageStyle={{borderRadius:20}}   style={{ height:250, paddingBottom:8, borderRadius:10}} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/mytry-bea8d.appspot.com/o/thumb-10.jpg?alt=media&token=9c9a3f0a-fb7c-4588-b5e3-412554f0a6b4'}} >
                                    <LinearGradient
                                                start={{x: 0.1, y:.6}} end={{x: 0.1, y: 1}}
                                                locations={[0,9]}
                                                colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']} style={{position:'absolute', top:0, left:0, right:0, bottom:0,flexDirection:'row',borderRadius:10,  }} >
                                        <Text style={{fontWeight:'bold', fontSize:22, color:'#fff', alignSelf:'flex-end', paddingBottom:10, paddingLeft:14   }} >
                                                Booba on fire in his New Gotham Clip
                                        </Text>                           
                                    </LinearGradient>        
                            </ImageBackground>   
            </View>
        );
    }
}


//make this component available to the app
export default Hero;
