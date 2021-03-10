import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { TabNavigator } from "react-navigation";
import { PeopleScreen } from "./screens/PeopleScreen";
import { DecisionScreen } from "./screens/DecisionScreen";
import { RestaurantsScreen } from "./screens/RestaurantsScreen";
import Constants from "expo-constants";

console.log("---------------------------");
console.log(`Delifloop est lancé sur ${Platform.OS}`);

const platformOS = Platform.OS.toLowerCase();

const tabs = TabNavigator({
  PeopleScreen: {
    screen: PeopleScreen,
    navigationOptions: {
      tabBarLabel: "People",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("./image/people.jpeg")}
          style={{ width: 32, height: 32, tintColor: tintColor }}
        />
      ),
    },
  },
  DecisionScreen: {
    screen: DecisionScreen,
    navigationOptions: {
      tabBarLabel: "Decision",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("./image/decision.jpeg")}
          style={{ width: 32, height: 32, tintColor: tintColor }}
        />
      ),
    },
  },
  RestaurantsScreen: {
    screen: RestaurantsScreen,
    navigationOptions: {
      tabBarLabel: "People",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("./image/restaurant.jpg")}
          style={{ width: 32, height: 32, tintColor: tintColor }}
        />
      ),
    },
  },
},
{
  initialRouteName: "DecisionScreen",
  animationEnabled: true,
  swipeEnabled: true,
  backbehavior:"none",
  lazy:true,
  tabBarPosition: platformOS === "android" ? "top" : "bottom",
  tabBarOptions: {
    activeTintColor: "ff0000",
    showIcon: true,
    style: {
      paddingTop: platformOS === "android" ? Constants.statusBarHeight : 0
    }
  }
}
);
export default tabs;
