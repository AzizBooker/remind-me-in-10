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
export default function TimerItem({ item,navigation }) {
// console.log(item)

  return (
    <TouchableWithoutFeedback
      //TODO 2 Set Up so on click modal opens and is passed refrence to item
      onPress={() => {
        navigation.navigate('InfoModal',item);
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={{...styles.duration,...styles.highlightText}}>{item.duration}</Text>
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
    fontWeight: "bold",
  },
    highlightText:{
      color:Colors.highlightText
    },
    highlightTextUrgent:{
      color:Colors.highlightTextUrgent
    }
});
