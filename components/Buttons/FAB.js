import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
} from "react-native";

export default function FAB() {
  return (
    <View>
      <TouchableNativeFeedback style={styles.FAB}></TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  FAB: {
    borderRadius: 30,
  },
});
