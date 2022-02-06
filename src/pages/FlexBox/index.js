import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image, TextInput, StyleSheet, ScrollView} from 'react-native';

// export class FlexBox extends Component {
//     //1
//     constructor(props){
//         super(props);
//         console.log('==>Constructor');
//         this.state = {
//             subscriber: 200,
//         }
//     }
//     //3
//     componentDidMount(){
//         console.log('Component did mount');
//         setTimeout(()=>{
//             this.setState({
//                 subscriber:400
//             });
//         },2000);
     
//     }
//     //5
//     componentDidUpdate(){
//         console.log('Component did update');
//     }
//     //6
//     componentWillUnmount(){
//         console.log('Component will unmount');
//     }
//     //2 dan //4
//     render(){
//     console.log('Render');    
//     return (
//         <View>
//         <View style={{flexDirection:'row', backgroundColor:'#c8d6e5', alignItems:'center', justifyContent:'space-between'}}>
//             <View style={{backgroundColor:'#ee5253', height: 50, width:50}}></View>
//             <View style={{backgroundColor:'#feca57', height: 50, width:50}}></View>
//             <View style={{backgroundColor:'#1dd1a1', height: 50, width:50}}></View>
//             <View style={{backgroundColor:'#5f27cd', height: 50, width:50}}></View>
//         </View>
//         <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
//             <Text>Beranda</Text>
//             <Text>Video</Text>
//             <Text>Playlist</Text>
//             <Text>Komunitas</Text>
//             <Text>Channel</Text>
//             <Text>Tentang</Text>
//         </View>
//         <View style={{flexDirection:'row', alignItems: 'center', marginTop: 20}}>
//             <Image source={{uri:'https://placeimg.com/100/100/animals'}} style={{width:100,height:100,borderRadius:50}}/>
//             <View style={{marginLeft:16}}>
//                 <Text style={{fontWeight:'bold'}}>Niel</Text>
//                 <Text>{this.state.subscriber} Subscriber</Text>  
//             </View>
//         </View>
//         </View>
 
//     )
//     }
// }

export const FlexBox = () => {
    const [subscriber, setSubscriber]= useState(100);
    useEffect(()=>{
        console.log('did unmount'); 
        setTimeout(()=>{
            setSubscriber(400);
        }, 2000);
        return () => {
           console.log('did update'); 
        };
    },[subscriber]);  
    // useEffect(()=>{
    //     console.log('did update');
    //     setTimeout(()=>{
    //      setSubscriber(400);
    //     }, 2000);
    // },[subscriber])      
    return (
        <View>
        <View style={{flexDirection:'row', backgroundColor:'#c8d6e5', alignItems:'center', justifyContent:'space-between'}}>
            <View style={{backgroundColor:'#ee5253', height: 50, width:50}}></View>
            <View style={{backgroundColor:'#feca57', height: 50, width:50}}></View>
            <View style={{backgroundColor:'#1dd1a1', height: 50, width:50}}></View>
            <View style={{backgroundColor:'#5f27cd', height: 50, width:50}}></View>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
            <Text>Beranda</Text>
            <Text>Video</Text>
            <Text>Playlist</Text>
            <Text>Komunitas</Text>
            <Text>Channel</Text>
            <Text>Tentang</Text>
        </View>
        <View style={{flexDirection:'row', alignItems: 'center', marginTop: 20}}>
            <Image source={{uri:'https://placeimg.com/100/100/animals'}} style={{width:100,height:100,borderRadius:50}}/>
            <View style={{marginLeft:16}}>
                <Text style={{fontWeight:'bold'}}>Niel</Text>
                <Text>{subscriber} Subscriber</Text>  
            </View>
        </View>
        </View>
 
    )
    
}