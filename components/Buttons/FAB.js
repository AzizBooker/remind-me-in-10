import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
} from "react-native";

export default function FAB() {
  return (
    <View>
      <TouchableNativeFeedback style={styles.FAB}>
        <Text>New Reminder</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  FAB: {
    borderRadius: 30,
  },
});
