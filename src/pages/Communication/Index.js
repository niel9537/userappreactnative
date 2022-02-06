import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

export default function Communication() {
    const[jumlahproduk, setJumlahproduk] = useState(0);
    return (
        <View style={styles.wrapper}>
          <Text style={styles.textTitle}>Komunikasi Antara Props dan State</Text>
          <Product setOnClickListener={()=>setJumlahproduk(jumlahproduk+1)}/>
          <Cart jumlahproduk={jumlahproduk}/>
        </View>
      );
}

const styles = StyleSheet.create({
    wrapper:{
        padding:20,
    },
    textTitle:{
        textAlign:'center'
    }
});
