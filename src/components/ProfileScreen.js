import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView, Image, ImageBackground} from 'react-native';
//import components
import ProfileItem from './ProfileItem';
/*import assets*/
import p1Img from '../assets/images/james.jpg';

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: "Profiles",
    };
  render() {
      let p1 = {name:"Enumah Josiah",img:p1Img,pos:"President",dept:"400L, Physics"};

    return (
        <ScrollView>
            
            <View style={styles.container}>

                <View style={styles.profileRow}>
                    <ProfileItem pImg={p1.img} pName={p1.name} pPos={p1.pos} pDept={p1.dept}/>
                    <ProfileItem pImg={p1.img} pName={p1.name} pPos={p1.pos} pDept={p1.dept}/>
                </View>
                <View style={styles.profileRow}>
                    <ProfileItem pImg={p1.img} pName={p1.name} pPos={p1.pos} pDept={p1.dept}/>
                    <ProfileItem pImg={p1.img} pName={p1.name} pPos={p1.pos} pDept={p1.dept}/>
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
  profileRow: {
    flexDirection:'row',
    height: 200,
    }
});