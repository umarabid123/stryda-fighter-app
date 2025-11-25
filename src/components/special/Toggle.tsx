"use client"

import React from "react"
import { View, TouchableOpacity, StyleSheet, Animated, type ViewStyle } from "react-native"

import AppText from "./AppText"
import { wp } from "../../constant/constants"
import { Colors } from "../../constant/themes"

interface ToggleProps {
  label: string
  subtitle?: string
  isEnabled: boolean
  onToggle: (value: boolean) => void
  style?: ViewStyle
}

export const Toggle: React.FC<ToggleProps> = ({ label, subtitle, isEnabled, onToggle, style }) => {
  const toggleAnim = React.useRef(new Animated.Value(isEnabled ? 1 : 0)).current

  React.useEffect(() => {
    Animated.timing(toggleAnim, {
      toValue: isEnabled ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }, [isEnabled, toggleAnim])

  const translateX = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, wp(5.5)],
  })

  return (
    <View style={[styles.container, style]}>
      <View style={styles.textContainer}>
        <AppText text={label} fontSize={wp(4)} color={Colors.white} />
        {subtitle && (
          <AppText
            text={subtitle}
            fontSize={wp(3.2)}
            color={Colors.white}
            marginVertical={wp(1)}
          />
        )}
      </View>

      <TouchableOpacity
        style={[styles.toggleSwitch, isEnabled && styles.toggleEnabled]}
        onPress={() => onToggle(!isEnabled)}
        activeOpacity={0.8}
      >
        <Animated.View
          style={[
            styles.toggleThumb,
            {
              transform: [{ translateX }],
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
  },
  textContainer: {
    flex: 1,
  },
  toggleSwitch: {
    width: wp(12),
    height: wp(6),
    borderRadius: wp(3),
    backgroundColor: "#444",
    justifyContent: "center",
    paddingHorizontal: wp(0.5),
  },
  toggleEnabled: {
    backgroundColor: Colors.gray,
  },
  toggleThumb: {
    width: wp(5.5),
    height: wp(5.5),
    borderRadius: wp(2.75),
    backgroundColor: Colors.primary,
  },
})
