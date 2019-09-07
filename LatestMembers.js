//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , ScrollView, Image} from 'react-native';
import data from './data';


// create a component
class LatestMembers extends Component {

    state={
        data:data
    }

    latestMembers = () => {
        return this.state.data.map(data => {
            return  <View key={data.id} style={{alignItems:'center', padding:5}}  >
                        <Image source={{uri:data.user_avatar}} style={{height:50, width:50, borderRadius: 25, marginHorizontal:22 }} />
                        <Text style={{padding:5}} >{data.username}</Text>
                    </View>
        })
    }

    render() {
        return (
            <View> 
                <View>
                    <Text style={{fontSize:24,fontWeight:'bold',paddingTop:20, }}>Latest Members</Text>
                </View>  
                <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false} >
                     {this.latestMembers()}
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        alignSelf:'stretch',
        paddingVertical:5,
        backgroundColor:'#a4b0be',
        marginVertical:8,
        borderRadius:7
    },
});

//make this component available to the app
export default LatestMembers;
