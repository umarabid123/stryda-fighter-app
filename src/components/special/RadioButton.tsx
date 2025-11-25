import type React from "react"
import { View, TouchableOpacity, StyleSheet, Image, type ViewStyle } from "react-native"

import AppText from "./AppText"
import { wp } from "../../constant/constants"
import { Colors } from "../../constant/themes"

interface RadioButtonProps {
  title: string
  subtitle?: string
  isSelected: boolean
  onPress: () => void
  avatar?: any
  style?: ViewStyle
}

export const RadioButton: React.FC<RadioButtonProps> = ({ title, subtitle, isSelected, onPress, avatar, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress} activeOpacity={0.7}>
      {avatar && <Image source={avatar} style={styles.avatar} resizeMode="contain" />}

      <View style={styles.content}>
        <AppText text={title} fontSize={wp(4)} color={Colors.white} />
        {subtitle && (
          <AppText
            text={subtitle}
            fontSize={wp(3.2)}
            color={Colors.white}
            marginVertical={wp(1)}
          />
        )}
      </View>

      <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
        {isSelected && (
          <View style={styles.checkmark}>
            <AppText text="✓"  fontSize={wp(5)} color={Colors.white} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  },
  avatar: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(7.5),
    marginRight: wp(4),
    backgroundColor: "#333",
  },
  content: {
    flex: 1,
  },
  checkbox: {
    width: wp(7),
    height: wp(7),
    borderRadius: wp(3.5),
    borderWidth: 2,
    borderColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxSelected: {
    backgroundColor: Colors.white,
    borderColor: Colors.white,
  },
  checkmark: {
    alignItems: "center",
    justifyContent: "center",
  },
})
