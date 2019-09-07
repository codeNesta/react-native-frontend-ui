//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image, ScrollView } from 'react-native';
import data from './data';
import Heading from './Heading';
import LatestMembers from './LatestMembers';
import Hero from './Hero';
import Mosiac from './Mosiac';

// create a component
class App extends Component {

  state={
    data:data,
    refresh:false
  }


  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, padding:5}}>
                 <View>
                      <Heading/>
                      <Hero/>      
                      <LatestMembers/>       
                 </View>

                 <View style={{paddingTop:20, }} >
                       <Text style={{fontSize:28, fontWeight:'bold'}}>Monday</Text>
                 </View>
                 <Mosiac/>
                          <Text style={{fontWeight:'bold', fontSize:24, marginTop:10, paddingLeft:6 }}>
                            News
                          </Text>
                          <FlatList  style={{width:"100%"}} 
                              data={this.state.data}
                              keyExtractor={(item, index) => index.toString()}
                              renderItem={({item}) => (
                                          <View style={styles.rowStyle}>
                                                <View style={styles.imageContainer} >
                                                        <Image source={{uri: item.image_link}} style={styles.image} />
                                                </View>
                                                <View style={styles.rightSideContent}>
                                                        <Text style={{backgroundColor:"#7bed9f", width:90, paddingVertical:4, textAlign:'center', borderRadius:7}} >{item.type}</Text>
                                                        <Text style={styles.headline} >{item.headline}</Text>
                                                        <View style={styles.avatarAndCaption} >
                                                          <Image source={{uri: item.user_avatar}} style={{height:24, width:24, borderRadius:12 }} />
                                                          <Text style={{paddingLeft:10}} >{item.username}</Text>
                                                        </View>
                                                </View>
                                          </View>
                          )}/>              
      </View>
      </ScrollView>

    );
  }
}


const styles = StyleSheet.create({

  imageContainer:{
        margin:3,
        height:120,
        width:(Dimensions.get('window').width / 3 ) - 4,
       
        
  },
  image:{
     flex:1,
     width:null,
     alignSelf:'stretch',
     borderRadius: 10,
  },
  rowStyle:{
    flexDirection:'row',
    borderRadius:7,
    backgroundColor:'#dfe4ea',
    padding:5,
    margin:5

    // flexWrap:"wrap"
  },
  rightSideContent:{
    paddingLeft:10,
    width:(Dimensions.get('window').width / 1.5 )
  },
  headline:{
    fontSize:19,
    fontWeight:'bold'
  },
  avatarAndCaption:{
    flexDirection:'row',
    alignSelf:'stretch',
    paddingTop:15
  }
});

//make this component available to the app
export default App;
