import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import React, { useEffect } from 'react';
import mac from '../../assets/image/mackbookpro.jpg'
import { useState } from 'react';
import axios from 'axios';
const Item = ({
    nama,
    email,
    bidang
}) => {
    return(
        <View>
        <View style={styles.container}>
          <Image source={mac} style={{height : 100,width:100, borderRadius: 100/2}}/>
          <View style={{marginLeft: 10}}>
              <Text>{nama}</Text>
              <Text>{email}</Text>
              <Text>{bidang}</Text>
          </View>
          <View style={{marginLeft: 80}}>
                <Text style={{fontSize: 20, fontWeight : 'bold', color: 'red'}}>X</Text>
          </View>
        </View>
        </View>
    )
} 



export default function LocalAPI() {
  const [nama,setNama] = useState('');
  const [email,setEmail] = useState('');
  const [bidang,setBidang] = useState('');
  const [data,setData] = useState([]);
  
  const GetData = () =>{
    axios.get('http://10.0.2.2:3000/users')
    .then(res =>  setData(res.data))
    .catch(error => console.log('Error ',error))
  }
  
  const Submit = () => {
    const datad = {
        nama, 
        email,
        bidang
    }
    axios.post('http://10.0.2.2:3000/users',datad)
    .then(res =>  {console.log('Data after sent', res.data)})
    .catch(error => console.log('Error ',error))
    GetData();

    }
  useEffect(() =>{
    GetData();
  },[]);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textPosition}>CRUD</Text>
      <Text>Masukan Data Akun</Text>
      <TextInput placeholder='Nama Lengkap' style={styles.textStyle} value={nama} onChangeText={(value)=> setNama(value)}></TextInput>
      <TextInput placeholder='Email' style={styles.textStyle} value={email} onChangeText={(value)=> setEmail(value)}></TextInput>
      <TextInput placeholder='Bidang' style={styles.textStyle} value={bidang} onChangeText={(value)=> setBidang(value)}></TextInput>
      <Button title='Tambah' style={{marginTop : 10}} onPress={()=>Submit()} />
      {data.map(data => {return <Item key={data.id} nama={data.nama} email={data.email} bidang={data.bidang}/>})}
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper : {
        padding : 20
    },
    textPosition : {
        textAlign: 'center'
    },
    textStyle : {
        marginVertical : 10,
        borderRadius : 2,
        borderColor : 'black',
        borderWidth : 1
    },
    container : {
        marginTop: 10,
        flexDirection : 'row',
        alignItems : 'center',
        
    }
});
