import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Col, Row, Grid } from "react-native-easy-grid";
import { useState } from "react";
import { TextInput,ToggleButton } from "react-native-paper";
import ButtonGroup from "../components/Buttons/ButtonGroup";
import Colors from "../utils/Colors";
import SetTimeWidget from "../components/SetTimeWidget";

export default function NewReminderModal() {
  //TODO 1 Finish UI of In Screen
  //TODO 2 On Submit new Remainder created (useFormik)

  return(
    <View style={styles.container}>
        <SetTimeWidget />
        <TextInput
          placeholder="title"
          backgroundColor={Colors.background2}
          underlineColor={Colors.secondary}
          mode="underline"
          style={styles.input}
          theme={{
            colors: { text: Colors.primary, placeholder: Colors.primary2 },
          }}
        />
        <TextInput
          placeholder="description"
          multiline={true}
          backgroundColor={Colors.background2}
          underlineColor={Colors.secondary}
          mode="underline"
          style={[styles.input, styles.multilineInput]}
          numberOfLines={5}
          theme={{
            colors: { text: Colors.primary, placeholder: Colors.primary2 },
          }}
        />
        <ButtonGroup containerStyle={styles.input}/>
        
       <View style={styles.buttonContainer}>
           <Button mode="text"  >Cancel</Button>
           <Button mode="outlined" >Add Remainder </Button>
       </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingBottom: 20,
  },
  buttonContainer:{
      marginTop:20,
      flexDirection:'row',
      justifyContent:'space-around'
  },
  input: {
    color: Colors.secondary,
    margin: 16,
    borderColor: Colors.secondary,
    borderRadius: 8,
  },
  multilineInput: {
    paddingTop: 0,
  },
});
