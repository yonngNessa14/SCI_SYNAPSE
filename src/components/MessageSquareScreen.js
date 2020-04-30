import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView, FlatList, Image, ImageBackground, ActivityIndicator, Alert} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
//import Firebase
import firebase from '../../Firebase';


export default class MessageSquareScreen extends Component {
    
    static navigationOptions = {
        title: "Message Square",
    };

    constructor() {
        super();
        //fix for offline firebase error report
        const originalSend = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function(body) {
        if (body === '') {
            originalSend.call(this);
        } else {
            originalSend.call(this, body);
        }
        };

        this.ref = firebase.firestore().collection('messages');
        this.unsubscribe = null;
        this.state = {
          isLoading: true,
          messages: [],
          bgColors: ['redBG','greenBG','orangeBG','purpleBG'],
          bgIndex: 0
        };
    }

    render() {
       
        if(this.state.isLoading){
            return(
            <View style={styles.activity}>
                <ActivityIndicator size="large" color="rgb(255,165,0)"/> 
            </View>
            )
       }
        return (
                
                <View style={styles.container}>
                    <FlatList 
                        data={this.state.messages} 
                        renderItem={
                            ({item})=> { 
                                return (
                                    <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Message',{ msgID:item.key})} style={styles.touchBox}>
                                        <View style={styles.messageRow}>
                                            <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
                                                <View style={ [ styles.messageImage, styles[this.selectBGColor()] ] }>
                                                <Text style={styles.messageImageText}>{item.title.substring(0,1)}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.messageBody}>
                                                <Text style={[styles.header, styles.detailText]}>{item.title}</Text>
                                                <Text style={[styles.excerpt, styles.detailText]}>{item.excerpt}</Text>
                                                <Text style={[styles.date, styles.detailText]}>{item.date}</Text>
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

    componentDidMount() {
        try{
             this.unsubscribe = this.ref.onSnapshot(this.onMessageUpdate,this.onMessageUpdateError);
        }
        catch(err){
            this.onMessageUpdateError();
        }
    }

    onMessageUpdate = (querySnapshot) => {
        const messages = [];
        console.log('return of snapshot');
        querySnapshot.forEach((doc) => {
          const { messageID, title, excerpt, content, date } = doc.data();
          messages.push({
            key: doc.id,
            title,
            excerpt,
            content,
            date,
          });
        });
        this.setState({
          messages,
          isLoading: false,
       });
    }
    onMessageUpdateError = (error) => {

        Alert.alert(
            "No Internet Access",
            "Looks like you're connected to the internet",
            [
              {text: 'Try Again', onPress: () => {
                this.unsubscribe = this.ref.onSnapshot(this.onMessageUpdate,this.onMessageUpdateError);
               }
              },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              }
            ],
            {cancelable: false},
          );
    }

    selectBGColor() {
        let bgColors = this.state.bgColors;
        return bgColors[ Math.floor(Math.random() * bgColors.length) ];

    }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingBottom: 22
   },
  messageRow: {
    flexDirection:'row',
    paddingLeft: 18,
  },
  messageImage: {
      flex:0,
      width:50,
      height:50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25
  },
  messageBody: {
    flex:9,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,
    paddingBottom:10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#D9D9D9'
  },
  messageImageText: {
    color: '#eee',
    fontSize: 25,
  },
  header: {
      fontSize: 18,
      fontWeight: 'bold',
  },
  excerpt: {
    fontSize: 15,
  },
  date: {
    fontSize: 12,
    fontWeight: '200',
  },
  detailText: {
      marginTop: 0,
      marginBottom: 0
  },
  orangeBG: {
      backgroundColor: 'orange'
  },
  greenBG: {
    backgroundColor: 'green'
    },
    blueBG: {
        backgroundColor: 'blue'
    },
    redBG: {
        backgroundColor: 'red'
    },
    cyanBG: {
        backgroundColor: 'cyan'
    },
    purpleBG: {
        backgroundColor: 'purple'
    },
    touchBox:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});