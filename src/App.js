import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image, TextInput, StyleSheet, ScrollView} from 'react-native';
import BasicJavascript from './pages/BasicJavascript';
import CallAPIVanilla from './pages/CallAPIVanilla';
import Communication from './pages/Communication/Index';
import { FlexBox } from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import ReactNativeSvg from './pages/ReactNativeSvg';
import { SampleComponent } from './pages/SampleComponent';
import StateDinamis from './pages/StateDinamis';
import StylingComponent from './pages/StylingComponent';
 
//Functional component App
const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      SetIsShow(false);
    },6000);
  },[]);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent/> */}
        {/* <FlexBox/> */}
        {/* <StylingComponent/>
        {/* <PropsDinamis/> */}
        {/* <StateDinamis/> */}
        {/* <SampleComponent/>
        <Position/> */}
        {/* <Communication/> */}
        {/* <BasicJavascript/> */}
        {/* <ReactNativeSvg/> */}
        <CallAPIVanilla/>
      </ScrollView>
    </View>
  )
};
export default App;
