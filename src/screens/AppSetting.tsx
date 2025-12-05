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
          value={notificationsEnabled}
          onToggle={setNotificationsEnabled}
        />
        <Toggle
          label="Allow location?"
          subtitle="See relevant events near you"
          value={locationEnabled}
          onToggle={setLocationEnabled}
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
    paddingTop: 40
  },
  optionsContainer: {
    width: (329 / DESIGN_WIDTH) * SCREEN_WIDTH,
    alignSelf: 'center',
    marginTop: 0,
    gap: Spacing.xxl,
  },
});
