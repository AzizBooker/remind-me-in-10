import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { TextInput } from "react-native-paper";
import Colors from "../utils/Colors";
import SetTimeModal from "./SetTimeModal";
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import { SpinPicker } from "react-native-spin-picker";
export default function SetTimeWidget({mode}) {
    const [date,setDate]=useState(new Date())
    const [show,setShow]=useState(false)
    const [text,setText]=useState(moment().format('LT'))

    const handleDatePickerOnChange=(event,selectedDate)=>{
        console.log(event)
        console.log(selectedDate)
        setText(formatDate(selectedDate))
        setShow(false)

    }
    //Date=>Date ;stub
    //function will turn a normal date into a moment formated 'LT' date consiting of hour,minute,and am or pm ;purpose
    const formatDate=(date)=>{
      return moment(date).format('LT')
    }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("Press");
          setShow(true)
        }}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableWithoutFeedback>
      {show&& (
          <DateTimePicker value={date} mode="time" minimumDate={new Date()}   onChange={handleDatePickerOnChange}/>
      )
          } 
     
      
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
    fontSize: 60,
    fontWeight: "bold",
    color: Colors.primary,
    alignSelf:"center",
    textAlign:"center"
  },
});
/*
 <SpinPicker
                data={[...Array(100).keys()]}
                value={this.state.selectedItem}
                keyExtractor={number => number.toString()}
                renderItem={item => <Text>{item.toString()}</Text>}/>
                */