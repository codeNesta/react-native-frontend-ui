//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image, ScrollView } from 'react-native';
import data from './data';
import Heading from './Heading';
import LatestMembers from './LatestMembers'

// create a component
class App extends Component {

  state={
    data:data,
    refresh:false
  }

  refreshData = () =>{
    this.setState({
      refresh:true
    })

    this.setState({
      refresh:false,
      data: [
        {
          id:"8",
          type: "Tech",
          headline: "Why phones that secretly listen to us are a myth",
          user_avatar:"https://i.pravatar.cc/400?img=7",
          username:"Fazer_33",
          image_link:"https://firebasestorage.googleapis.com/v0/b/mytry-bea8d.appspot.com/o/Why%20phones%20that%20secretly%20listen%20to%20us%20are%20a%20myth.jpg?alt=media&token=a550c54b-47cc-4cf7-83ed-40739b71e1a2"
  
      },
      {
          id:"9",
          type:'Tech',
          headline:"Raspberry Pi computer looks down on Earth",
          user_avatar:"https://i.pravatar.cc/400?img=8",
          username:"Rice_124",
          image_link:"https://firebasestorage.googleapis.com/v0/b/mytry-bea8d.appspot.com/o/20%20photography%20tips%20for%20taking%20pictures.jpg?alt=media&token=c2ff18a8-7321-4cf3-b864-e26c04bc26b5"
  
      }
      ]
    })

  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding:5}}>
                 <View style={{flex:1 }} >
                      <Heading/>
                           <Text style={{fontSize:18,fontWeight:'bold',paddingVertical:7 }}>Latest Members</Text>
                      <LatestMembers/>
                      <Text style={{fontWeight:'bold', fontSize:19, marginTop:10, paddingLeft:6 }}>
                          News
                       </Text>
                 </View>

              
             
                  <View style={{flex:2}} >
                  <FlatList  style={{width:"100%"}}  showsVerticalScrollIndicator={false} 
                              data={this.state.data}
                              keyExtractor={(item, index) => index.toString()}
                              refreshing={this.state.refresh}
                              onRefresh={this.refreshData}
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
      </View>

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
