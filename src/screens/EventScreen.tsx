import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from '../constant'


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
export default function EventScreen() {
  return (
    <View style={styles.container}>
      <Text>EventScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
  flex: 1,
    backgroundColor: Colors.black,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    paddingTop: 40,
    }
})