import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet, ScrollView} from 'react-native';

export const MateriFlexBox = () => {
    return (
        <View>
        <View style={{flexDirection:'row', backgroundColor:'#c8d6e5', alignItems:'center', justifyContent:'space-between'}}>
            <View style={{backgroundColor:'#ee5253', height: 50, width:50}}></View>
            <View style={{backgroundColor:'#feca57', height: 50, width:50}}></View>
            <View style={{backgroundColor:'#1dd1a1', height: 50, width:50}}></View>
            <View style={{backgroundColor:'#5f27cd', height: 50, width:50}}></View>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
            <Text>Beranda</Text>
            <Text>Video</Text>
            <Text>Playlist</Text>
            <Text>Komunitas</Text>
            <Text>Channel</Text>
            <Text>Tentang</Text>
        </View>
        <View style={{flexDirection:'row', alignItems: 'center', marginTop: 20}}>
            <Image source={{uri:'https://placeimg.com/100/100/animals'}} style={{width:100,height:100,borderRadius:50}}/>
            <View style={{marginLeft:16}}>
                <Text style={{fontWeight:'bold'}}>Niel</Text>
                <Text>20000 Subscriber</Text>  
            </View>
        </View>
        </View>
 
    )
}