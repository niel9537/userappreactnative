import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function CallAPIVanilla() {
  const [dataUser,setDataUser] = useState({
    avatar: '',
    email : '',
    first_name : '',
    last_name: ''
  })
  useEffect(()=>{
      // //Call Api GET  
      //   fetch('https://jsonplaceholder.typicode.com/todos/1')
      //   .then(response => response.json())
      //   .then(json => console.log(json))
      // //Call Api POST
      //   const dataForApi = {
      //     name : 'Otniel',
      //     job  : 'SD'
      //   }
      //   console.log('data objek',dataForApi);
      //   console.log('data for api',JSON.stringify(dataForApi));
      //   fetch('https://reqres.in/api/users',{
      //     method: 'POST',
      //     headers: {
      //       'Content-Type' : 'application/json'
      //     },
      //     body : JSON.stringify(dataForApi)
      //   })
      //   .then(response => response.json())
      //   .then(json => console.log('response post :',json))
    },[]);
  const getData = () => {
     //Call Api GET  
        fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(json => 
          setDataUser(json.data))
  }
  const postData = (name,job) => {
     //Call Api POST
        const dataForApi = {
          name : name,
          job  : job
        }
        // console.log('data objek',dataForApi);
        // console.log('data for api',JSON.stringify(dataForApi));
        fetch('https://reqres.in/api/users',{
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(dataForApi)
        })
        .then(response => response.json())
        .then(json => console.log('response post :',json))
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
