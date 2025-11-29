import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Header from '../components/common/Header';
import MeshGradientBackground from '../components/common/MeshGradientBackground';
import { Colors } from '../constant';
import EmptyState from '../components/EmptyState';

const Home = () => {
  return (
    <View style={styles.container}>
      <MeshGradientBackground />
      <Header title='Home' />
      <EmptyState title="My matches" subtitle='You have no matches yet.' buttonLabel='Browse' customStyle={{marginBottom:12, marginTop:14}} />
      <EmptyState title="My events" subtitle='You have no events yet.' buttonLabel='Create event' />
    </View>
  );
};
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    paddingTop:40
  },
});
