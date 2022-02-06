import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ilustrasi from '../../assets/image/see.svg';
export default function ReactNativeSvg() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Materi React Native SVG</Text>
      <Ilustrasi width={244} height={125}/>
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
