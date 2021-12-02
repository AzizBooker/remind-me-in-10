import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import priorityEnum from "../../Enums/priority.enum";
import Colors from "../../utils/Colors";
export default function ButtonGroup({ containerStyle }) {
  const data = ["None", "Medium", "High"];
  const [userOption, setUserOption] = useState('None');
  const handleOnPress = (item) => {
    setUserOption(item);
    console.log(userOption);
  };
  return (
    <View style={{ ...styles.container }}>
      {data.map((item, index) => {
        return (
          <TouchableHighlight
            key={index}
            onPress={() => {
              handleOnPress(item);
            }}
            style={
              item == userOption
                ? styles.selectedButton
                : styles.unselectedButton
            }
          >
            <Text style={styles.text}>{item}</Text>
          </TouchableHighlight>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Colors.background2,
    borderRadius: 8,
    margin: 16,
  },
  text: {
    color: Colors.primary,
  },
  unselectedButton: {
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: Colors.background3,
  },
  selectedButton: {
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
});
