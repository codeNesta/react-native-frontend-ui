//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import data from './data';
import LinearGradient from 'react-native-linear-gradient';


// create a component
class Mosiac extends Component {

    state={
        data:data
    }

    mosiac = () =>{
        return this.state.data.map(singleData => {
            return (         
                    <View  key={singleData.id} style={{height:250, margin:3,  padding:5, flexBasis:'48%' }} >
                            <ImageBackground source={{uri: singleData.image_link}}   style={{position:'absolute', right:0, bottom:0, left:0, top:0 }} imageStyle={{borderRadius:20,}} >
                                <LinearGradient start={{x: 0.1, y:.6}} end={{x: 0.1, y: 1}}
                                            locations={[0,9]}
                                            colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']} style={{position:'absolute', top:0, left:0, right:0, bottom:0,  flexDirection:'row', borderRadius:10 }}>
                                   <Text style={{fontWeight:'bold', fontSize:15, color:'#fff', alignSelf:'flex-end', paddingBottom:10, paddingLeft:14  }}>{singleData.headline}</Text>
                                </LinearGradient>
                            </ImageBackground>
                    </View> 
             
            )
        })
    }

    render() {
        return (
            <View style={styles.container}> 
               {this.mosiac()}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
       height:800,
       overflow:'hidden',
       flexWrap:'wrap',
       flexDirection:'row' , 
       justifyContent:'space-between',
       elevation:8

    },
});

//make this component available to the app
export default Mosiac;
