import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button, Image, ImageBackground, StatusBar} from 'react-native';
import { TouchableNativeFeedback, ToolbarAndroid } from 'react-native-gesture-handler';


/*Import assets*/
import homebg from '../assets/images/sci_doodle.png';
import oaulogo from '../assets/images/oaulogo.png';
import nasslogo from '../assets/images/nasslogo.png';

/*import assets*/

export default class HomeScreen extends Component {
  static navigationOptions = {
      title: "Home",
      header: null,
  };
  render() {
    return (
      <View style={styles.container}>

      <ImageBackground source={homebg} style={styles.topPanelBG}>

        <View style={styles.topPanel}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Image source={nasslogo} />
                    <Text>hello git</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{fontSize:30,fontWeight:'bold',color:'#fff',textAlign:'center',paddingLeft:2,paddingRight:2}}>Nigerian Association of Science Students</Text>
                    <Text style={{fontSize:25,color:'#fff',textAlign:'center'}}>Obafemi Awolowo University</Text>
                </View>
        </View>

        <View style={styles.bottomPanel}>
            <View style={styles.menuRow}>

                
                 <View style={[styles.menuItem,styles.homeMenuBtn]}>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('MessageSquare')} style={styles.touchBox}>
                            <Text style={styles.menuItemText}>Message Square</Text>  
                    </TouchableNativeFeedback>
                 </View>
                 <View style={[styles.menuItem,styles.homeMenuBtn]}>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Editorial')} style={styles.touchBox}>
                            <Text style={styles.menuItemText}>Editorial</Text>  
                    </TouchableNativeFeedback>
                 </View>
            </View>

            <View style={styles.menuRow}>
                 <View style={[styles.menuItem,styles.homeMenuBtn]}>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Profiles')} style={styles.touchBox}>
                            <Text style={styles.menuItemText}>Profiles</Text>  
                    </TouchableNativeFeedback>
                 </View>     
                 <View style={[styles.menuItem,styles.homeMenuBtn]}>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('About')} style={styles.touchBox}>
                            <Text style={styles.menuItemText}>About NASS</Text>  
                    </TouchableNativeFeedback>
                 </View>
            </View>

        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topPanel: {
    flex: 1,
    backgroundColor: 'rgba(20,20,20,0.65)'
  },
  bottomPanel: {
    flex: 1,
    backgroundColor: 'rgba(20,20,20,0.65)',
  },
  topPanelBG:{
      flex:1
  },
  menuRow:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  menuItem:{
      flex:0,
      justifyContent:'center',
      alignItems:'center',
      width:'49%',
      height:'98%',
  },
  menuItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#fff'
  },
  pageContent: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent'
  },
  homeMenuBtn: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth:1,
    borderColor: 'rgba(200,200,200,0.65)'
  },
  touchBox:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  }
});