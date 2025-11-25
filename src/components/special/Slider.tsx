"use client"

import type React from "react"
import { View, StyleSheet, type ViewStyle } from "react-native"
import Slider from "@react-native-community/slider"
import { wp } from "../constant/constants"
import { Colors, Fonts } from "../constant/themes"
import AppText from "./AppText"

interface CustomSliderProps {
  label: string
  value: number
  onValueChange: (value: number) => void
  minimumValue: number
  maximumValue: number
  step?: number
  suffix?: string
  style?: ViewStyle
}

export const CustomSlider: React.FC<CustomSliderProps> = ({
  label,
  value,
  onValueChange,
  minimumValue,
  maximumValue,
  step = 0.1,
  suffix = "",
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <AppText text={label} fontName={Fonts.CircularStdBook} fontSize={wp(3.5)} color={Colors.text} />
        <View style={styles.valueIndicator}>
          <AppText
            text={value.toFixed(1)}
            fontName={Fonts.CircularStdBold}
            fontSize={wp(3.8)}
            color={Colors.secondary}
          />
          <AppText
            text={suffix}
            fontName={Fonts.CircularStdBook}
            fontSize={wp(3.2)}
            color={Colors.textSecondary}
            marginVertical={wp(0)}
          />
        </View>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        value={value}
        onValueChange={onValueChange}
        step={step}
        minimumTrackTintColor={Colors.red}
        maximumTrackTintColor={Colors.border}
        thumbTintColor={Colors.secondary}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: wp(3),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: wp(2),
  },
  valueIndicator: {
    backgroundColor: Colors.red,
    paddingHorizontal: wp(3),
    paddingVertical: wp(1.5),
    borderRadius: wp(4),
    flexDirection: "row",
    gap: wp(1),
  },
  slider: {
    height: wp(2),
    borderRadius: wp(1),
  },
})
