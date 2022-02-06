import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function BasicJavascript() {
    const nama = 'Otniel Putra Zebua';
    let usia = 22;
    const isMale = true; 
    //complex
    //objek
    const hewanPeliharaan = {
        nama: 'Miaw',
        jenis: 'Kucing',
        orangTua: {
            bapak: 'King',
            ibu: 'Queen'
        }
    }
    //Fungsi dengan parameter 2 string
    const sapaOrang = (name, age) => {
        return console.log(`Hello ${name} umur ${age}`);
    };
    sapaOrang('Otniel',24);
    //list array
    const namaOrang = ['Otniel', 'Putra', 'Zebua'];
    //kondisi
    // if(hewanPeliharaan.nama == 'Miaw'){
    //     console.log('Miaw')
    // }else{
    //     console.log('Not Found')
    // }
    //fungsi dengan parameter objek
    const sapaHewan = (hewanPeliharaan) => {
        //let hasil = '';
        // if(hewanPeliharaan.nama == 'Miaw'){
        //     hasil = 'Hallo Miaw'
        // }else{
        //     hasil = 'Not Found'
        // }
        return hewanPeliharaan.nama === 'Miaw'
        ? 'Hallo'
        : 'Not';
    };
    
    return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Basic Javascript</Text>
      <Text>{nama} umur {usia}</Text>
      {/* //return list */}
      {namaOrang.map(nama => (<Text>{nama}</Text>))}
      <Text>{sapaHewan(hewanPeliharaan)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {padding:20},
    textTitle:{textAlign:'center'}
});
