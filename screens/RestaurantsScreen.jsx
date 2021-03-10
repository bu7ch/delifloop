import { Alert, FlatList, Platform, BackHandler, Scrollview,StyleSheet, Text, View  } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { Toast, Root } from 'native-base'
import { StackNavigator } from 'react-navigation'
import Constants from ' expo-constants'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import CustomTextInput from "../compoenents/CustomTextInput";
import CustomButton from "../compoenents/customButton";


class ListScreen extends Component {
  constructor(inProps){
    super(inProps);
    this.state = {
      listData: [ ]
    }
  }
  render() {
    return (
      <Root>
        <View style={styles.listScreenContainer}>
          <CustomButton
          text="Add Restaurant"
          width="94%"
          onPress={() =>{ this.props.navigation.navigation("AddScreen")}
          }/>
          <FlatList
          style={styles.restaurantList}
          data={this.state.listData}
          renderItem= {({items}) =>
          <View style={styles.restaurantContainer}>
            <Text style={styles.restaurantName}>{items.name}</Text>
            <CustomButton
            text="Delete"
            onPress= {() => { 
              Alert.alert(
                "Please confirm",
                "Are you sure you want to delete this restaurant?",
                [
                  {text : "Yes", onPress: () =>{
                    AsyncStorage.getItem("restaurants", function(inError, inRestaurants){
                      if (inRestaurants === null) {
                        inRestaurants = [];
                      }else {
                        inRestaurants = JSON.parse(inRestaurants);
                      }
                      for(let i = 0; i < inRestaurants.length;i ++){
                        const restaurant = inRestaurants[i];
                        if (restaurant.key === item.key) {
                          inRestaurants.splice(i, 1);
                          break;
                        }
                      }
                      AsyncStorage.setItem("restaurants",
                      JSON.stringify(inRestaurants), function(){
                        this.setState({ listData : inRestaurants});
                      Toast.show({
                        text: "Restaurant deleted",
                        position: "bottom",
                        type: 'danger',
                        duration: 2000
                      });
                      }.bind(this))
                    }.bind(this))
                  }},
                  {text:"No"},
                  {text:"Cancel", style: "cancel"},
                ],
                {cancelable: true}
              )
            }
            }/>
            </View>
        }
        />
        </View>
      </Root>
    )
  }
  compoenentDidMount() {
    BackHandler.addEventListener(
      "hardwareBackPress", () => { return true;}
    )
    AsyncStorage.getItem("restaurants", function(inError,inRestaurants){
      if(inRestaurants === null){
        inRestaurants = [ ];
      } else {
        inRestaurants = JSON.parse(inRestaurants);
      }
      this.setState({ listData: inRestaurants}.bind(this))
    })
  }
}


class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name = '',
      cuisine = '',
      price = '',
      rating = '',
      phone = '',
      address = '',
      website = '',
      delivery = '',
      key: `r_${new Date().getTime()}`
    };
  }
    render() {
      return (
        <Scrollview style={styles.addScreenContainer}>
          <View style={styles.addScreenContainer}>
            <View style={styles.addScreenContainer}>
              <CustomTextInput label="Name"
              maxLength={20}
              stateHolder={this}
              stateFieldName = 'name'/>
              <Text style={styles.fieldLabel}>Cuisine</Text>
              <View style={styles.pickContainer}>
                <Picker 
                style={styles.picker}
                prompt = 'Cuisine'
                selectedValue= {this.state.cuisine}
                onValueChange = {
                  (inItemValue) => this.setState({cuisine: inItemValue})
                }>
                  <Picker.Item label="" value="" />
                  <Picker.Item label="American" value="American" />
                  <Picker.Item label="Belgian" value="Belgian" />
                  <Picker.Item label="Cuban" value="Cuban" />
                  <Picker.Item label="Chinese" value="Chinese" />
                  <Picker.Item label="French" value="French" />
                  <Picker.Item label="Steak House" value="Steak House" />
                </Picker>
              </View>
              <Text style={styles.fieldLabel}>pirce</Text>
              <View style={styles.pickContainer}>
                <Picker 
                style={styles.picker}
                prompt = 'price'
                selectedValue= {this.state.price}
                onValueChange = {
                  (inItemValue) => this.setState({price: inItemValue})
                }>
                  <Picker.Item label="" value="" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="6" value="6" />
                </Picker>
              </View>
              <Text style={styles.fieldLabel}>Rating</Text>
              <View style={styles.pickContainer}>
                <Picker 
                style={styles.picker}
                prompt = 'rating'
                selectedValue= {this.state.rating}
                onValueChange = {
                  (inItemValue) => this.setState({rating: inItemValue})
                }>
                  <Picker.Item label="" value="" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                </Picker>
              </View>
              <CustomTextInput
              label="Phone Number"
              maxLength="20"
              stateHolder={this}
              stateFieldName="phone"
              />
              <CustomTextInput
              label="Address"
              maxLength="20"
              stateHolder={this}
              stateFieldName="address"
              />
              <CustomTextInput
              label="Website"
              maxLength="20"
              stateHolder={this}
              stateFieldName="website"
              />
              <Text style={styles.fieldLabel}>Delivery?</Text>
              <View style={styles.pickContainer}>
                <Picker
                style={styles.picker}
                prompt = 'delivery'
                selectedValue= {this.state.delivery}
                onValueChange = {
                  (inItemValue) => this.setState({delivery: inItemValue})
                }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Yes" value="Nes" />
                  <Picker.Item label="No" value="No" />
                </Picker>
              </View>
            </View>
            <View style={styles.addScreenContainer}>
              <CustomButton
              text="Cancel"
              width="44%"
              onPress={
                ()=> this.props.navigation.navigate("ListScreen")
              }/>
              <CustomButton
              text="save"
              width="44%"
              onPress={()=> {
                  AsyncStorage.getItem("restaurants",function(inError, inRestaurants){
                  if(inRestaurants === null){
                    inRestaurants = [];
                  }else{
                    inRestaurants = JSON.parse(inRestaurants);
                  }
                    inRestaurants.push(this.state);
                    AsyncStorage.setItem("restaurants", 
                    JSON.stringify(inRestaurants), function(){
                      this.props.navigation.navigate('ListScreen');
                    }.bind(this)
                    );
                }.bind(this));
              }}/>

            </View>
          </View>
        </Scrollview>
      )
    }
  
}

const RestaurantsScreen = StackNavigator({
  ListScreen: { screen: ListScreen },
  AddScreen: { screen: AddScreen}
},
{
  headerMode: "none",
  initialRouteName: "ListScreen"
})

const styles = StyleSheet.create({
  listScreenContainer:{
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        paddingTop: Constants.statusBarHeight
      },
    android: {}
    })
  },
  restaurantList:{
    width:"94%"
  },
  restaurantContainer:{
    flexDirection:"row",
    marginTop:4,
    marginBottom:4,
    borderColor:"#e0e0e0",
    borderBottomWidth: 2,
    alignItems:'center'
  },
  restaurantName:{
    flex: 1
  },
  addScreenContainer:{
    marginTop: Constants.statusBarHeight
  },
  addScreenInnerContainer:{
    flex: 1,
    alignItems:'center',
    paddingTop: 20,
    width:"100%"
  },
  addScreenFormContainer:{
    width:"96%"
  },
  fieldLabel:{
    marginLeft: 10,
  },
  pickerContainer: {
    ...Platform.select({
      ios:{},
      android:{
        width:"96%",
        borderRadius:8,
        borderColor: "#c0c0c0",
        borderWidth:2,
        marginLeft: 10,
        marginBottom:10,
        marginTop:4
      }
    })
  },
  picker: {
    ...Platform.select({
      ios:{
        width:"96%",
        borderRadius:8,
        borderColor: "#c0c0c0",
        borderWidth:2,
        marginLeft: 10,
        marginBottom:10,
        marginTop:4
      },
      android: {}
    })
  },
  addScreenButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center"
  }
})


exports.RestaurantsScreen = RestaurantsScreen;