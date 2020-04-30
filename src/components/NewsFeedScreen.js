import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView, FlatList, Image, ImageBackground} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

/*import assets*/
import p1Img from '../assets/images/james.jpg';
import sampleImg from '../assets/images/about_banner.jpg';

export default class NewsFeedScreen extends Component {
    static navigationOptions = {
        title: "Editorial",
    };
  render() {
        let messages = [
            {key:'item1',bgClass:"yellowBG",title:"Important Faculty Information cbk bc kb sk c s cs cs cs csc icbsic ",excerpt:"This message is for all part one students of Physics ",content:"Content1",date:"24-03-2019"},
            {key:'item2',bgClass:"blueBG",title:"Faculty Science Program",excerpt:"This message is for all part one students of Physics ",content:"Content1",date:"24-03-2019"},
            {key:'item3',bgClass:"greenBG",title:"Another important informatio",excerpt:"This message is for all part one students of Physics ",content:"Content1",date:"24-03-2019"},
            {key:'item4',bgClass:"redBG",title:"Important Faculty Information",excerpt:"This message is for all part one students of Physics ",content:"Content1",date:"24-03-2019"},
            {key:'item5',bgClass:"yellowBG",title:"Important Faculty Information",excerpt:"This message is for all part one students of Physics ",content:"Content1",date:"24-03-2019"},
            {key:'item6',bgClass:"blueBG",title:"Faculty Science Program",excerpt:"This message is for all part one students of Physics ",content:"Content1",date:"24-03-2019"},
            {key:'item7',bgClass:"greenBG",title:"Another important informatio",excerpt:"This message is for all part one students of Physics ",content:"Content1",date:"24-03-2019"},
            {key:'item8',bgClass:"redBG",title:"Important Faculty Information",excerpt:"This message is for all part one students of Physics ",content:"Content1",date:"24-03-2019"},
                                   

        ];

        return (
                
                <View style={styles.container}>
                    <FlatList 
                        data={messages} 
                        renderItem={
                            ({item})=> { 
                                return (
                                    <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Story',{ storyID:item.key} )} style={styles.touchBox}>
                                        <View style={styles.messageRow}>
        
                                            <View style={styles.messageBody}>

                                                <View style={{flex:1, flexDirection:'row'}}>
                                                    <View style={{flex:9, overflow:'hidden'}}><Text style={[styles.header, styles.detailText]}>{item.title}</Text></View>
                                                    <View style={{flex:2, overflow:'hidden'}}><Text style={[styles.date, styles.detailText]}>{item.date}</Text></View>
                                                </View>
                                                
                                                <View style={{}}>
                                                    <Text style={[styles.excerpt, styles.detailText]}>{item.excerpt}</Text>
                                                </View>

                                                <View style={styles.imageHolder}>
                                                    <Image source={sampleImg} style={styles.featuredImg}/> 
                                                </View>
                                                

                                            </View>
                                            
                                        
                                        </View>
                                    </TouchableNativeFeedback>
                                
                             );
                            }
                        }   
                    />
                
                </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageRow: {
    flexDirection:'row',
    paddingLeft: 15,
    paddingRight:15,
    paddingBottom:15,
    borderBottomWidth: 1,
    borderColor: '#D9D9D9'
  },
  imageHolder: {
    flex:0, width:'100%',
    marginTop:10,
  },
  featuredImg: {
      width:'100%',
      borderWidth:1, 
      borderColor:'rgba(0,0,0,0)',
      borderRadius: 10,
      backgroundColor:'#D9D9D9'
  },
  messageBody: {
    flex:1,
    paddingRight:5,
    paddingTop:10,
    paddingBottom:10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  messageImageText: {
    color: '#eee',
    fontSize: 20,
  },
  header: {
      fontSize: 15,
      fontWeight: 'bold',
      color:'#000'
  },
  excerpt: {
    fontSize: 15,
    fontWeight: '400',
    color:'#000'
  },
  date: {
    fontSize: 12,
    fontWeight: '200',
  },
  detailText: {
      marginTop: 0,
      marginBottom: 0
  },
  touchBox:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});