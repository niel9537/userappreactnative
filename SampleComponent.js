import React from 'react';
import {Text, View, Image, TextInput, StyleSheet, ScrollView} from 'react-native';
import mac from './mackbookpro.jpg'


export const SampleComponent = () => {
    return (
      <View style={{padding: 12, backgroundColor: '#f2f2f2', width: 212, borderRadius: 8}}>
        <Image source={mac} style={{width: 188, height: 107,borderRadius: 8}}/>
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>Macbook Pro 2020</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 14, color: '#F2994A'}}>Rp 17.999.999</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 12}}>Jakarta Utara</Text>
        <View style={{backgroundColor: '#6FCF97', borderRadius: 10, paddingVertical: 6, marginTop: 20}}>
          <Text style={{fontSize: 14, fontWeight: '300',color: 'white', textAlign: 'center'}}>Beli</Text>
        </View>
      </View>
    )
  }
