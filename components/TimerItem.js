import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../utils/Colors";
export default function TimerItem({ item }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("Click");
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.duration}>{item.duration}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 14,
  },
  title: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: "bold",
  },
  duration: {
    fontSize: 16,
    color: Colors.highlightTextUrgent,
    fontWeight: "bold",
  },
});
