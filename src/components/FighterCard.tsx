import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import AppText from './common/AppText';
import { Colors } from '../constant';

const InfoTag = ({ label }:any) => (
  <View style={styles.infoTag}>
    <AppText text={label} fontSize={14} color={Colors.white} />
  </View>
);

export default function FighterCard({
  fighterName = "Fighter Name",
  fighterImage = require("../../assets/images/event-card-img.png"),
  fighterFlag = require("../../assets/images/flag-icon.png"),
  discipline = "Muay Thai",
  fightRecord = "0-0-0",
  weightClass = "65 kg",
  style = {},
}) {
  return (
    <View style={[styles.cardContainer, style]}>
      <Image source={fighterImage} resizeMode="cover" style={styles.fighterImage} />

      <View>
        <View style={styles.headerRow}>
          <AppText
            text={fighterName}
            fontSize={18}
            color={Colors.white}
            style={{ fontWeight: '600' }}
          />
          <Image source={fighterFlag} style={styles.flagIcon} resizeMode="contain" />
        </View>

        <View style={styles.metaRow}>
          <InfoTag label={discipline} />
          <InfoTag label={fightRecord} />
          <InfoTag label={weightClass} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  fighterImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  flagIcon: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  infoTag: {
    backgroundColor: "#343636",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 99,
  },
});
