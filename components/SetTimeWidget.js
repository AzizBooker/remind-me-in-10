import React from "react";
import { useState,useEffect } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { TextInput } from "react-native-paper";
import Colors from "../utils/Colors";
import SetTimeModal from "./SetTimeModal";
import DateTimePicker from '@react-native-community/datetimepicker';

import moment from "moment";
import { SpinPicker } from "react-native-spin-picker";
export default function SetTimeWidget({setDate}) {
    const [duration,setDuration]=useState()
   // const [date,setDate]=useState(new Date())
    const [show,setShow]=useState(false)
    const [text,setText]=useState(moment().format('LT'))
    const [timeUntil,setTimeUntil]=useState('0 minutes , 0 seconds')


    

    const handleDatePickerOnChange=(event,selectedDate)=>{
     //   console.log(event)
      //  console.log(selectedDate)
    //   console.log( getTimeUntilDateInSeconds(selectedDate) )
       setText(formatDate(selectedDate))
       
       setTimeout(()=>{ //set time out fixes modal showing twice why? i don't know
         setShow(false)
         setDate(selectedDate)
          setTimeUntil(getFormattedTime(getTimeUntilDateInSeconds(selectedDate)))
         setTimeUntil(getFormattedTime(getTimeUntilDateInSeconds(selectedDate)))
        
},0)
       
    }
    //?Date=>Date ;stub
    //?function will turn a normal date into a moment formated 'LT' date consiting of hour,minute,and am or pm ;purpose
    const formatDate=(date)=>{
      return moment(date).format('LT')
    }
    const getTimeUntilDateInMinutes=(date)=>{
        return (moment(date).diff(new Date(),'minutes'))
    }
    const getTimeUntilDateInSeconds=(date)=>{
        return (moment(date).diff(new Date(),'seconds'))
    }
    const getFormattedTime=(duration)=>{
      var min=Math.floor(duration/60)
      var sec=duration-(min * 60)
      
           
     return( `${min} minutes , ${sec} seconds`)
        
    }


  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("Press");
          setShow(true)
        }}
      >
        <View>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.subtitleText}>in {timeUntil}</Text>
        </View>
      </TouchableWithoutFeedback>

      {show&& (
          <DateTimePicker value={new Date()} mode="time"  disabled={true}  onChange={handleDatePickerOnChange}/>
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
  subtitleText:{
    color:Colors.primary2,
    alignSelf:'center',
    textAlign:"center"
  }
});