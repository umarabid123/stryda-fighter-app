import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import MeshGradientBackground from '../components/common/MeshGradientBackground'
import { Colors } from '../constant';
import { Toggle } from '../components/special/Toggle';
import Header from '../components/common/Header';


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")
export default function AppSetting() {
  return (
    <View style={styles.container}>
        <Header title='App Settings' isBack ={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    paddingTop:40
  },
});
