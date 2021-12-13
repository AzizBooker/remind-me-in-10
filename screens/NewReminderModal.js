import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Button } from "react-native-paper";
import { Col, Row, Grid } from "react-native-easy-grid";
import { useState, useEffect } from "react";
import { TextInput, ToggleButton } from "react-native-paper";
import Colors from "../utils/Colors";
import SetTimeWidget from "../components/SetTimeWidget";
import Reminder from "../Models/reminder.model";
import priorityEnum from "../Enums/priority.enum";
import moment from "moment";
import { AddReminder,testReminder } from "../redux/ReminderSlice";
import { bindActionCreators } from "redux";
import { useDispatch, connect } from "react-redux";

export default function NewReminderModal(props, { navigation }) {
  //TODO 1N/A Add Spinners for Timer
  //TODO 2 On Submit new Remainder created 



  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //! For Button Group
  const data = ["None", "Medium", "High"];
  const [userOption, setUserOption] = useState("None");
  const handleOnPress = (item) => {
    setUserOption(item);
  };
  const dispatch = useDispatch()
  
  const handleSubmit=()=>{
          console.log('submit')
          var a=moment(date)
          var b=moment(moment())
          var duration=a.diff(b,'seconds')
         dispatch(AddReminder({title,description,duration,priority:handlePriority()}))
         props.navigation.navigate("Home")
    }

  const handlePriority = () => {
    var priority;
    switch (userOption) {
      case "None":
        priority = priorityEnum.p3;
        break;
      case "Medium":
        priority = priorityEnum.p2;
        break;
      case "High":
        priority = priorityEnum.p1;
        break;
    }
    return priority;
  };

  return (
    <View style={styles.container}>
      <View>
        <SetTimeWidget setDate={setDate} />
        <TextInput
          placeholder="title"
          backgroundColor={Colors.background2}
          underlineColor={Colors.primary2}
          onChangeText={(text) => {
            setTitle(text);
          }}
          mode="underline"
          style={styles.input}
          theme={{
            colors: { text: Colors.primary, placeholder: Colors.secondary },
          }}
        />
        <TextInput
          placeholder="description"
          multiline={true}
          backgroundColor={Colors.background2}
          underlineColor={Colors.primary2}
          onChangeText={(text) => {
            setDescription(text);
          }}
          mode="underline"
          style={[styles.input, styles.multilineInput]}
          numberOfLines={5}
          theme={{
            colors: { text: Colors.primary, placeholder: Colors.secondary },
          }}
        />

        <View style={{ ...styles.buttonGroupContainer }}>
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

        <View style={styles.buttonContainer}>
          <Button mode="text">Cancel</Button>
          <Button mode="outlined" onPress={handleSubmit}>
            Add Remainder
          </Button>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = bindActionCreators({
  AddNewReminder: AddReminder,
});
//export default connect(null, mapDispatchToProps)(NewReminderModal);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingBottom: 20,
  },
  buttonGroupContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.background2,
    borderRadius: 8,
    paddingVertical: 8,
    margin: 16,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    color: Colors.primary,
    margin: 16,
    borderColor: Colors.secondary,
    borderRadius: 8,
  },
  multilineInput: {
    paddingTop: 0,
  },
  unselectedButton: {
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 6,
    backgroundColor: Colors.background3,
  },
  selectedButton: {
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 6,
  },
});
