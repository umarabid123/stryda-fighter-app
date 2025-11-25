import type React from "react"
import { View, StyleSheet, type ViewStyle } from "react-native"

import { wp } from "../../constant/constants"
import { Colors } from "../../constant/themes"
import AppText from "./AppText"

interface FormSectionProps {
  title?: string
  subtitle?: string
  children?: React.ReactNode
  style?: ViewStyle
}

export const FormSection: React.FC<FormSectionProps> = ({ title, subtitle, children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {title && (
        <AppText
          text={title}
          fontSize={wp(4.5)}
          color={Colors.white}
          marginVertical={wp(2)}
        />
      )}
      {subtitle && (
        <AppText
          text={subtitle}
          fontName="CircularStd-Book"
          fontSize={wp(3.2)}
          color={Colors.white}
          marginVertical={wp(1)}
        />
      )}
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: wp(3),
  },
})
