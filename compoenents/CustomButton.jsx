import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

class CustomButton extends Component {
  render() {
    const {
      text,
      onPress,
      buttonStyle,
      textStyle,
      width,
      disabled,
    } = this.props;
    return (
      <TouchableOpacity
        style={[
          {
            padding: 10,
            height: 60,
            borderRadius: 8,
            margin: 10,
            width: width,
            backgroundColor:
              disabled != null && disabled === true ? "#e0e0e0" : "#303656",
          },
          buttonStyle,
        ]}
        onPress={() => {
          if (disabled == null || disabled === false) {
            onPress();
          }
        }}
      >
        <Text
          style={[
            {
              fontsize: 20,
              fontweight: "bold",
              color: "#ffffff",
              textAlign: "center",
              paddinTop: 8,
            },
            textStyle,
          ]}
        >
          {" "}
          {text}{" "}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default CustomButton;
