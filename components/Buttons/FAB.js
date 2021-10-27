import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
} from "react-native";
import Colors from "../../utils/Colors";

export default function FAB() {
  return (
    <View>
      <TouchableNativeFeedback onPress={()=>{console.log('tap')}} style={styles.FAB}>
        <Text>New Reminder</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  FAB: {
    borderRadius: 30,
    backgroundColor:Colors.highlightText
  },
});
