import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';


const Story = (props) => {
    return (
        <View style={{alignItems:'center', marginRight:20, marginTop:20}}>
            <Image source={{uri:props.gambar}} style={{width:70,height:70, borderRadius:70/2}}></Image>
            <Text style={{maxWidth:50, textAlign:'center'}}>{props.judul}</Text>
        </View>
    )
}
export default function PropsDinamis() {
  return (
          <ScrollView horizontal>
            <View style={{flexDirection:'row'}}>
                <Story judul="Super Saiyan Goku" gambar="https://cdn.kincir.com/2/R2kL7ILvy4DGpC07dRLfyPHUzzLDQ65GZfl4G-2MJfw/transform/rs:fill:764:400/src/production/2019-08/b971711829f8cae24b254cff757df4b91434cc54.png"/>
                <Story judul="Kaido" gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4rWQS-SxADFdB7KKdZBAdDyYQ6Subty6zA&usqp=CAU"/>
                <Story judul="Irak Tank" gambar="https://upload.wikimedia.org/wikipedia/commons/0/06/New_iraqi_army_tank.jpg"/>
                <Story judul="Kaido" gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4rWQS-SxADFdB7KKdZBAdDyYQ6Subty6zA&usqp=CAU"/>
                <Story judul="Irak Tank" gambar="https://upload.wikimedia.org/wikipedia/commons/0/06/New_iraqi_army_tank.jpg"/>
                <Story judul="Super Saiyan Goku" gambar="https://cdn.kincir.com/2/R2kL7ILvy4DGpC07dRLfyPHUzzLDQ65GZfl4G-2MJfw/transform/rs:fill:764:400/src/production/2019-08/b971711829f8cae24b254cff757df4b91434cc54.png"/>
                <Story judul="Kaido" gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4rWQS-SxADFdB7KKdZBAdDyYQ6Subty6zA&usqp=CAU"/>
                <Story judul="Super Saiyan Goku" gambar="https://cdn.kincir.com/2/R2kL7ILvy4DGpC07dRLfyPHUzzLDQ65GZfl4G-2MJfw/transform/rs:fill:764:400/src/production/2019-08/b971711829f8cae24b254cff757df4b91434cc54.png"/>
                <Story judul="Kaido" gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4rWQS-SxADFdB7KKdZBAdDyYQ6Subty6zA&usqp=CAU"/>
            </View>
          </ScrollView>
  );
}
