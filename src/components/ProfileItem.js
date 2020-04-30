import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';

export default class ProfileItem extends Component {
    render() {
        return (
            <View style={styles.profileItem}>
                <ImageBackground source={this.props.pImg} style={{height: 200}}>
                    <View style={{flex:9}}></View>
                    <View style={styles.profileDetails}>
                        <Text style={{color:'#fff'}}>
                            {this.props.pName}
                        </Text>
                        <Text style={{color:'#fff',fontWeight:'bold'}}>
                            {this.props.pPos}
                        </Text>
                        <Text style={{color:'#fff'}}>
                            {this.props.pDept}
                        </Text>
                    </View>
                </ImageBackground>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    profileItem: {
        flex:1
    },
    profileDetails :{
        flex:3,padding:13,paddingTop:6,
        /*backgroundColor: 'rgba(230,40,60,0.65)',*/
        backgroundColor: 'rgba(255,165,0,0.65)'
    },
});