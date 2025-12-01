import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MeshGradientBackground from '../components/common/MeshGradientBackground';
import Header from '../components/common/Header';
import { Colors } from '../constant';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")
const MedicalPaper = () => {
  return (
    <View style={styles.container}>
      <Header title="Medical Papers" isBack={true} />
    </View>
  );
};

export default MedicalPaper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    paddingTop: 40,
    
  },
});
