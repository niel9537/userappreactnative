import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import macbook from '../../assets/image/mackbookpro.jpg';
import PropsDinamis from '../../pages/PropsDinamis';

export default function Cart(props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.ImageWrapper}>
        <Image source={macbook} style={styles.ImageSize}/>
        <Text style={styles.Notif}>{props.jumlahproduk}</Text>
      </View>
      <Text style={styles.TextCart}>Keranjang Belanja Anda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    ImageSize:{
      height:50,
      width:50,
      borderRadius: 50/2,
    },
    ImageWrapper:{
      borderWidth: 1,
      height:93,
      width:93,
      borderColor: '#4398d1',
      borderRadius:93/2,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'
    },
    wrapper:{
      alignItems: 'center',
      padding: 20
    },
    TextCart:{
      fontSize: 12,
      color: '#777777',
      fontWeight: '700',
      marginTop:8
    },
    Notif:{
      color: 'white',
      fontSize: 12,
      backgroundColor: '#6fcf97',
      padding: 4,
      borderRadius: 40,
      width:24,
      height:24,
      position: 'absolute',
      top: 0,
      right: 0,
    }
  });
  
