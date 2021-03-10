import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PeopleScreen } from "./screens/PeopleScreen";
import { DecisionScreen } from "./screens/DecisionScreen";
import { RestaurantsScreen } from "./screens/RestaurantsScreen";
import Constants from "expo-constants";

console.log("---------------------------");
console.log(`Delifloop est lancé sur ${Platform.OS}`);

const platformOS = Platform.OS.toLowerCase();

const Tab = createBottomTabNavigator();

function People() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
          source={require("./image/people.jpeg")}
          style={{ width: 32, height: 32}}
        />
    </View>
  );
}
function Decision() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
          source={require("./image/decision.jpeg")}
          style={{ width: 32, height: 32}}
        />
    </View>
  );
}
function Restaurant() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
          source={require("./image/restaurant.jpg")}
          style={{ width: 32, height: 32}}
        />
    </View>
  );
}

// {
//   initialRouteName: "DecisionScreen",
//   animationEnabled: true,
//   swipeEnabled: true,
//   backbehavior:"none",
//   lazy:true,
//   tabBarPosition: platformOS === "android" ? "top" : "bottom",
//   tabBarOptions: {
//     activeTintColor: "ff0000",
//     showIcon: true,
//     style: {
//       paddingTop: platformOS === "android" ? Constants.statusBarHeight : 0
//     }
//   }
// }

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="People" component={People} />
      <Tab.Screen name="Decision" component={Decision} />
      <Tab.Screen name="Restaurant" component={Restaurant} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
  <NavigationContainer>
    <MyTabs />
  </NavigationContainer>
  )
};
