import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView, Image, ImageBackground} from 'react-native';

/*import assets*/
import aboutBanner from '../assets/images/about_banner.jpg';

export default class MessageScreen extends Component {
    static navigationOptions = {
        title: "Message",
    };
    render() {
      let msgID = this.props.navigation.state.params.msgID;
      return (
        <ScrollView>
            
            <View style={styles.container}>

                <View style={styles.imageWrapper}>
                    <Image source={aboutBanner} />
                </View>

                <View style={styles.textWrapper}>

                    <Text style={styles.pageHeading}>Message {msgID}</Text>

                    <Text style={styles.pageParagraph}>
                        Message details goes here Message details goes here Message details goes here Message details goes here
                        Message details goes here Message details goes here Message details goes here Message details goes here
                        Message details goes here Message details goes here Message details goes here Message details goes here
                        Message details goes here Message details goes here Message details goes here Message details goes here
                        Message details goes here Message details goes here Message details goes here Message details goes here
                        Message details goes here Message details goes here Message details goes here Message details goes here
                    </Text>
                    
                </View>
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topPanelBG:{
    flex:1
  },
  imageWrapper: {

  },
  textWrapper: {
      padding: 15,
      backgroundColor: '#f9f9f9'
  },
  pageHeading: {
    fontSize: 20,
    color: 'rgb(20,20,20)',
    fontWeight: 'bold'
  },
  pageParagraph: {
    fontSize: 15,
    fontWeight:'400',
    textAlign: 'justify',
    color: 'rgb(60,60,60)',
    marginBottom: 10
  },


  
});