import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet, ScrollView} from 'react-native';
import macbook from './mackbookpro.jpg';
import SampleComponent from './SampleComponent';
//Functional component App


//Component untuk styling
const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View 
      style={{
        width: 100, 
        height:100, 
        backgroundColor: '#0abde3', 
        borderWidth: 2, 
        borderColor: '#5f27cd',
        marginTop: 20,
        marginHorizontal: 20}}/>
    </View>
  )
}
//Object style
const styles = StyleSheet.create({
  text:{
    fontSize : 30,
    fontWeight : 'bold',
    color: '#10ac84',
    marginTop: 20,
    marginLeft: 20
  }
})

//Component putra
const Putra = () => {
  return <Text>Putra Zebua</Text>
};
//Component Image
const ImagePhoto = () => {
  return <View>
  <Image source={{uri:'https://placeimg.com/100/100/animals'}} 
  style={{height:300,width:250}}/>
  </View>
 

}

//Class component Box
class Box extends Component{
  render(){
    return <Text>Komponen class component</Text>;
  }
}
//Class component profile
class Profile extends Component{
  render(){
    return(
    <View>
    <Image  source={{uri:'https://placeimg.com/100/100/animals'}} 
    style={{height:100,width:100, borderRadius:50}}/>
    <Text>Aku mencoba</Text>
    </View> 
    )
  }
}
export default StylingReactNativeComponent;
