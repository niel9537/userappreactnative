import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import macbook from './mackbookpro.jpg';
//Functional component App
const App = () => {
  return (
    <View>
    <Product/>
    <Product/>
    </View>

    //<StylingReactNativeComponent/>
  )
};

const Product = () => {
  return (
    <View style={{padding: 12, backgroundColor: '#f2f2f2', width: 212, borderRadius: 8}}>
      <Image source={macbook} style={{width: 188, height: 107,borderRadius: 8}}/>
      <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>Macbook Pro 2020</Text>
      <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 14, color: '#F2994A'}}>Rp 17.999.999</Text>
      <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 12}}>Jakarta Utara</Text>
      <View style={{backgroundColor: '#6FCF97', borderRadius: 10, paddingVertical: 6, marginTop: 20}}>
        <Text style={{fontSize: 14, fontWeight: '300',color: 'white', textAlign: 'center'}}>Beli</Text>
      </View>
    </View>
  )
}


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
//Sample Component
const SampleComponent = () => {
  return (
  <View>
      <View style={{width:80, height:80, backgroundColor: '#0abde3'}}></View>
      <Text>Otniel</Text>
      <Putra/>
      <ImagePhoto/>
      <TextInput style={{borderWidth: 1}}></TextInput>
      <Box/>
      <Profile/>
    </View>
  )
}
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
export default App;
