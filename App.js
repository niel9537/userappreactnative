import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet, ScrollView} from 'react-native';
import macbook from './mackbookpro.jpg';
import { MateriFlexBox } from './MaterialFlexBox';
import PositionReactNative from './PositionReactNative';
import {SampleComponent} from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';
 
//Functional component App
const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <StylingReactNativeComponent/> */}
        {/* //<SampleComponent/> */}
        {/* <MateriFlexBox/> */}
        <PositionReactNative/>
      </ScrollView>
    </View>
  )
};
export default App;
