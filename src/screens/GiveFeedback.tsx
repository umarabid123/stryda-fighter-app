
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../constant';
import Header from '../components/common/Header';



const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")
const GiveFeedback = () => {
  return (
    <View style={styles.container}>
      <Header title='Give Feedback' isBack />
    </View>
  );
};

export default GiveFeedback;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    paddingTop: 40,
    
  },
});
