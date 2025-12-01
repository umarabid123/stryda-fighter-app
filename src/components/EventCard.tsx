import React from "react";
import { View, Image, StyleSheet, ViewStyle, ImageSourcePropType } from "react-native";
import AppText from "./common/AppText";
import { Colors } from "../constant";

interface EventCardProps {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  containerStyle?: ViewStyle;
  onPress?: () => void;
}

export default function EventCard({
  image,
  title,
  subtitle,
  containerStyle,
  onPress,
}: EventCardProps) {
  return (
    <View style={[styles.card, containerStyle]}>
      <Image source={image} resizeMode="cover" style={styles.image} />

      <View style={styles.textContainer}>
        <AppText
          text={title}
          fontSize={18}
          color={Colors.white}
          style={styles.title}
        />

        <AppText
          text={subtitle}
          fontSize={14}
          color={Colors.textSecondary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#262a2b",
    padding: 10,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    marginBottom: 4,
  },
});
