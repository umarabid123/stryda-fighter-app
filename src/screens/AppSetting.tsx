import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Header from '../components/common/Header';
import Toggle from '../components/common/Toggle';
import { Colors, Spacing } from '../constant';


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")

const DESIGN_WIDTH = 393;
export default function AppSetting() {

  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Header title='App Settings' isBack={true} />
      <View style={styles.optionsContainer}>
        <Toggle
          label="Allow notifications?"
          subtitle="Get updated with your fighters and events."
          labelStyle={{ fontWeight: 500 }}
          subtitleStyle={{ fontWeight: 300 }}
          value={notificationsEnabled}
          onToggle={setNotificationsEnabled}
          layout="column"
        />
        <Toggle
          label="Allow location?"
          subtitle="See relevant events near you"
          labelStyle={{ fontWeight: 500 }}
          subtitleStyle={{ fontWeight: 300 }}
          value={locationEnabled}
          onToggle={setLocationEnabled}
          layout="column"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    // paddingTop: 40
  },
  optionsContainer: {
    width: (329 / DESIGN_WIDTH) * SCREEN_WIDTH,
    alignSelf: 'center',
    marginTop: 8,
    gap: Spacing.xxl,
  },
});
