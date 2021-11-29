import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'
import { useState } from 'react'
import { TextInput } from 'react-native-paper'
import Colors from '../utils/Colors'
import SetTimeWidget from '../components/SetTimeWidget'
export default function NewReminderModal() {

   
    //TODO 5C Style Text Input 
    //TODO 6C Add Back Button to Header to navigate to home Screen
    return (
        <View style={styles.container}>
           <SetTimeWidget />
            <TextInput placeholder="title" backgroundColor={Colors.background2}  underlineColor={Colors.secondary} 
             mode="underline" style={styles.input} 
             theme={{colors:{text:Colors.primary,placeholder:Colors.primary2}}}
             />
            <TextInput placeholder="description" multiline={true} backgroundColor={Colors.background2} 
            underlineColor={Colors.secondary} mode="underline"  style={[styles.input,styles.multilineInput]} numberOfLines={16}
            theme={{colors:{text:Colors.primary,placeholder:Colors.primary2}}} />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background,
        paddingBottom:20
    },
    input:{
        color:Colors.secondary,
        margin:16,
        borderColor:Colors.secondary,
        borderRadius:8
    },
    multilineInput:{
        paddingTop:0
    }
})
