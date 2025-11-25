import type React from "react"
import { View, StyleSheet } from "react-native"
import { wp } from "../../constant/constants"
import { Colors } from "../../constant/themes"


interface ProgressBarProps {
  current: number
  total: number
  style?: any
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, style }) => {
  const progress = (current / total) * 100

  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.progress,
          {
            width: `${progress}%`,
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: wp(65),
    height: 2,
    backgroundColor: Colors.gray,
    borderRadius: 1,
    overflow: "hidden",
    alignSelf: "center",
    marginTop: wp(4),
    marginBottom: wp(8),
  },
  progress: {
    height: "100%",
    backgroundColor: Colors.gray,
    borderRadius: 1,
  },
})
