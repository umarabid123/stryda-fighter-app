import type React from "react"
import { View, TouchableOpacity, StyleSheet, Image, type ViewStyle } from "react-native"

import AppText from "./AppText"
import { wp } from "../../constant/constants"
import { Colors } from "../../constant/themes"

interface AvatarWithAddProps {
  avatar?: any
  onPress?: () => void
  size?: "small" | "medium" | "large"
  style?: ViewStyle
  name?: string
}

const sizeConfig = {
  small: wp(12),
  medium: wp(20),
  large: wp(30),
}

export const AvatarWithAdd: React.FC<AvatarWithAddProps> = ({ avatar, onPress, size = "medium", style, name }) => {
  const avatarSize = sizeConfig[size]

  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.avatar,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          },
        ]}
      >
        {avatar && (
          <Image
            source={avatar}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: avatarSize / 2,
            }}
            resizeMode="cover"
          />
        )}
      </View>

      <TouchableOpacity
        style={[
          styles.addButton,
          {
            bottom: -wp(1),
            right: -wp(1),
            width: avatarSize * 0.3,
            height: avatarSize * 0.3,
            borderRadius: (avatarSize * 0.3) / 2,
          },
        ]}
        onPress={onPress}
      >
        <AppText text="+" fontName="CircularStd-Bold" fontSize={avatarSize * 0.25} color={Colors.primary} />
      </TouchableOpacity>

      {name && (
        <AppText
          text={name}
          fontName="CircularStd-Medium"
          fontSize={wp(4.5)}
          color={Colors.white}
          marginVertical={wp(2)}
          textAlign="center"
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: wp(4),
  },
  avatar: {
    backgroundColor: Colors.gray,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  addButton: {
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
})
