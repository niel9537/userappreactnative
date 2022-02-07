import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import  axios  from 'axios';

export default function CallAPIAxios() {
  const [dataUser,setDataUser] = useState({
    avatar: '',
    email : '',
    first_name : '',
    last_name: ''
  })
  const getData = () => {
    // Call API With Axios
    axios.get('https://reqres.in/api/users/10')
    .then(response => {
      setDataUser(response.data.data)
    })
    .catch(error => console.log('error :',error))
  }
  const postData = (name,job) => {
      const dataForApi = {
           name : name,
           job  : job
      } 
    //Call Api POST Axios
     axios.post('https://reqres.in/api/users',dataForApi)
      .then(response => setDataUser(response.data))
      .catch(error => console('err : ',error))
    }  
  return (
    <View style={{padding:20}}>
      <Text style={{textAlign: 'center', marginBottom:30}}>Materi CallApi</Text>
      <Button title='GET DATA' onPress={getData}/>
      <Text>Response GET DATA</Text>
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={{height:2, backgroundColor:'black', marginTop:5}}/>
      <Button title='POST DATA' onPress={postData('Niel','SD7')}/>
    </View>
  );
}
