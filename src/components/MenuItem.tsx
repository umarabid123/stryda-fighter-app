import type React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import AppText from './common/AppText';
import { Colors } from '../constant';
import { Spacing } from '../constant/spacing';
import { Typography } from '../constant/typography';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const DESIGN_WIDTH = 393;

interface SettingsRowProps {
  icon?: any;
  label: string;
  onPress?: () => void;
  arrowIcon?:any
  rightElement?: React.ReactNode;
}

export default function MenuItem({ icon, label, onPress, arrowIcon }: SettingsRowProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.leftSection}>
        <Image source={icon} resizeMode="contain" />
        <AppText
          text={label}
          fontSize={Typography.fontSize.lg}
          fontName="CircularStd-Medium"
          color={Colors.white}
        />
      </View>
      <Image
        source={require('../../assets/images/right-arrow-icon.png')}
        style={{ width: 24, height: 24, tintColor: '#808080'}}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: SCREEN_WIDTH,
    paddingVertical: (16 / DESIGN_WIDTH) * SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: (16 / DESIGN_WIDTH) * SCREEN_WIDTH,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
});
