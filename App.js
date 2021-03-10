import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import  { TabNavigator } from 'react-navigation';
import { PeopleScreen } from './screens/PeopleScreen';
import { DecisionScreen } from './screens/DecisionScreen';
import { RestaurantsScreen } from './screens/RestaurantsScreen';
import  Constants  from 'expo-constants'


console.log("---------------------------");
console.log(`Delifloop est lancé sur ${Platform.OS}`);

const platformOS = Platform.OS.toLowerCase() 

const tabs = TabNavigator({
  PeopleScreen : { screen : PeopleScreen,
 navigationOptions : {tabBarLabel : "People",
  tabbarIcon : ({ tintColor}) => (
    <Image source= { require('./image/')}
    style={{ width: 32, height: 32 , tintColor: tintColor}}/>
  )}},
  DecisionScreen : { screen : DecisionScreen,
 navigationOptions : {tabBarLabel : "Decision",
  tabbarIcon : ({ tintColor}) => (
    <Image source= { require('./image/')}
    style={{ width: 32, height: 32 , tintColor: tintColor}}/>
  )}},
  RestaurantsScreen : { screen : RestaurantsScreen,
 navigationOptions : {tabBarLabel : "People",
  tabbarIcon : ({ tintColor}) => (
    <Image source= { require('./image/')}
    style={{ width: 32, height: 32 , tintColor: tintColor}}/>
  )}},
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
