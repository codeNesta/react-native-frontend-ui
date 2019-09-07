//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Heading extends Component {
    render() {
        return (
            <View style={styles.container}>
                       <Text style={{textAlign:'center', marginVertical:10, fontSize:15, color:'white', fontWeight:'bold' }}>Basic Ui Demo</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
       alignSelf:'stretch',
       backgroundColor:'#ff7f50',
       borderRadius:10,
       elevation:8
    },
});

//make this component available to the app
export default Heading;
