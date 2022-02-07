import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect } from 'react';
import mac from '../../assets/image/mackbookpro.jpg'
import { useState } from 'react';
import axios from 'axios';


const Item = ({nama,email,bidang,onPress,onDelete}) => {
    return(
        <View>
        <View style={styles.container}>
          <TouchableOpacity onPress={onPress}>
            <Image source={mac} style={{height : 100,width:100, borderRadius: 100/2}}/>
          </TouchableOpacity>
          <View style={{marginLeft: 10}}>
              <Text>{nama}</Text>
              <Text>{email}</Text>
              <Text>{bidang}</Text>
          </View>
          <View style={{marginLeft: 80}}>
            <TouchableOpacity onPress={onDelete}>
                <Text style={{fontSize: 20, fontWeight : 'bold', color: 'red'}}>X</Text>
            </TouchableOpacity>
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
  const [button,setButton] = useState('TAMBAH');
  const [selectedUser,setSelectedUser] = useState('');
  


  const GetData = () =>{
    axios.get('http://10.0.2.2:3000/users')
    .then(res =>  setData(res.data))
    .catch(error => console.log('Error ',error))
  }
  
  const Submit = () => {
    const data = {
        nama, 
        email,
        bidang
    }
    if(button === 'SIMPAN'){
      axios.post('http://10.0.2.2:3000/users',data)
      .then(res =>  {console.log('Data after sent', res.data)})
      .catch(error => console.log('Error ',error))
      GetData();
    }else if(button === 'UPDATE'){
      axios.put(`http://10.0.2.2:3000/users/${selectedUser.id}`,data)
      .then(res =>  {
        console.log('Data after update', res.data);
        setNama('');
        setEmail('');
        setBidang('');
        setButton('TAMBAH');
        GetData();
      })
      .catch(error => console.log('Error ',error))
      
    }


  }

  const selectItem = (item) => {
    console.log('Selected Item : ', item);
    setNama(item.nama);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('UPDATE');
    setSelectedUser(item);
  }  
  const deleteItem = (item) => {
    console.log('Delected Item : ', item);
    axios.delete(`http://10.0.2.2:3000/users/${item.id}`)
    .then(res=>console.log('Data after delete :',res))
    .catch(error => console.log('Error : ',error))
    GetData();
  } 
  useEffect(() =>{
    GetData();
    return(()=>{
      console.log('Berhasil');
    })
  },[]);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textPosition}>CRUD</Text>
      <Text>Masukan Data Akun</Text>
      <TextInput placeholder='Nama Lengkap' style={styles.textStyle} value={nama} onChangeText={(value)=> setNama(value)}></TextInput>
      <TextInput placeholder='Email' style={styles.textStyle} value={email} onChangeText={(value)=> setEmail(value)}></TextInput>
      <TextInput placeholder='Bidang' style={styles.textStyle} value={bidang} onChangeText={(value)=> setBidang(value)}></TextInput>
      <Button title={button} style={{marginTop : 10}} onPress={()=>Submit()} />
      {data.map(data => {return <Item 
      key={data.id} 
      nama={data.nama} 
      email={data.email} 
      bidang={data.bidang} 
      onPress={() => selectItem(data)} 
      onDelete={()=> Alert.alert('Peringatan ',
      'Apakah anda yakin ingin menghapus data akun ini?',
      [
        {text:'Tidak',onPress:() =>console.log('Button Tidak')}, 
        {text: 'Ya', onPress:() =>deleteItem(data)}
      ])}
      />})
      }
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
