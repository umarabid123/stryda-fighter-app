import React from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import CarouselItem from "../components/CarouselItem";
import Header from "../components/common/Header";
import SearchSection from "../components/common/SearchSection";
import { Colors } from "../constant";
import AppText from "../components/common/AppText";
import EventCard from "../components/EventCard";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function DiscoverScreen() {
  const data = [
    { id: "1", image: require("../../assets/images/caraousal-icon.png") },
    { id: "2", image: require("../../assets/images/caraousal-icon.png") },
    { id: "3", image: require("../../assets/images/caraousal-icon.png") },
    { id: "4", image: require("../../assets/images/caraousal-icon.png") },
  ];

  const events = [
    {
      id: "1",
      title: "Muay Thai Showdown",
      subtitle: "Bangkok Arena • 24 Nov",
      image: require("../../assets/images/event-card-img.png"),
    },
    {
      id: "2",
      title: "Championship Night",
      subtitle: "London Stadium • 12 Dec",
      image: require("../../assets/images/event-card-img.png"),
    },
    {
      id: "3",
      title: "Glory Clash",
      subtitle: "Dubai Dome • 29 Dec",
      image: require("../../assets/images/event-card-img.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
    <ScrollView showsVerticalScrollIndicator={false}>
      <SearchSection />

      <View style={{ height: 220 }}>
        <FlatList
          data={data}
          horizontal
          scrollEnabled={true}      // 👈 important (ScrollView handles scrolling)
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 20, marginTop: 40 }}
          ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
          renderItem={({ item }) => (
            <CarouselItem
              imageSource={item.image}
              size={173}
              borderRadius={16}
            />
          )}
        />
      </View>

      <View style={{ paddingHorizontal: 20, paddingTop: 30 }}>
        <AppText
          text="Events soon 👀"
          fontSize={16}
          color={"#FFFFFFCC"}
          style={{ fontWeight: 500 }}
        />

        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}      // 👈 also disable
          contentContainerStyle={{ paddingBottom: 50, paddingTop: 16 }}
          ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
          renderItem={({ item }) => (
            <EventCard
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              containerStyle={styles.cardSpacing}
              onPress={() => console.log("Pressed:", item.title)}
            />
          )}
        />
      </View>
    </ScrollView></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    width: SCREEN_WIDTH,
    paddingTop: 40,
  },
  cardSpacing: {
    marginBottom: 0,
  },
});
