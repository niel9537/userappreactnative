import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

export default function CallAPIVanilla() {

  useEffect(()=>{
      //Call Api GET  
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
      //Call Api POST
        const dataForApi = {
          name : 'Otniel',
          job  : 'SD'
        }
        console.log('data objek',dataForApi);
        console.log('data for api',JSON.stringify(dataForApi));
        fetch('https://reqres.in/api/users',{
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(dataForApi)
        })
        .then(response => response.json())
        .then(json => console.log('response post :',json))
    },[]);
  return (
    <View>
      <Text>Materi CallApi</Text>
    </View>
  );
}
