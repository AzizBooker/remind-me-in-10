import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
} from "react-native";
import Colors from "../../utils/Colors";

export default function FAB(props) {
  console.log(props)
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={props.onPress} style={styles.TouchableWrapper}>
        <View >
        <Text style={styles.text}>New Reminder</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.highlightText,
    borderRadius: 90,
    width:60,
    height:60,
    
  },
  text:{

  }
});
