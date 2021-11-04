import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { TextInput } from "react-native-paper";
import Colors from "../utils/Colors";
import SetTimeModal from "./SetTimeModal";
//TODO On Click open popup

export default function SetTimeWidget() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("Press");
        }}
      >
        <Text style={styles.text}>10:00 </Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginBottom: 40,
    marginTop: 40,
  },
  text: {
    fontSize: 90,
    fontWeight: "bold",
    color: Colors.primary,
    alignSelf:"center",
    textAlign:"center"
  },
});
