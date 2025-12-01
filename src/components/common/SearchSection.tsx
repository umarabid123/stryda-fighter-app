import React from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";
import AppText from "./AppText";
import CustomIconButton from "./CustomIconButton";
import { Colors, wp } from "../../constant";

export default function SearchSection() {
  return (
    <View style={styles.container}>
      <AppText
        text="Discover"
        fontSize={32}
        style={styles.title}
        color={Colors.white}
      />

      <AppText
        text="Browser fighters and events world wide."
        color={Colors.textSecondary}
      />

      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <Image
            source={require("../../../assets/images/search-icon.png")}
            resizeMode="contain"
            style={styles.searchIcon}
          />

          <TextInput
            placeholder="Search"
            placeholderTextColor="#00000099"
            style={styles.searchInput}
          />
        </View>

        <CustomIconButton
          source={require("../../../assets/images/search-filter-icon.png")}
          btnStyle={styles.filterBtn}
          textStyle={{ display: "none" }}
          iconStyle={styles.filterIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "600",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    gap: 8,
  },
  searchBar: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 16,
    flexDirection: "row",
    width: wp(75),
    maxWidth: 293,
    alignItems: "center",
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchInput: {
    backgroundColor: "transparent",
    marginLeft: 6,
    borderWidth: 0,
    flex:1,
    color: "#000",
  },
  filterBtn: {
    backgroundColor: "#FFFFFF26",
    paddingVertical: 14,
    paddingHorizontal: 14,
    width: "auto",
    margin: 0,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
});