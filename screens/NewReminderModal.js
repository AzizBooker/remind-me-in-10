import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'
import { useState } from 'react'
import { TextInput } from 'react-native-paper'
import Colors from '../utils/Colors'
import NumberPlease from 'react-native-number-please'
export default function NewReminderModal() {
    const [duration,setDuration]=useState(initialDigits)
    const initialDigits=[
        {id:"min",value:0},
        {sec:"min",value:0}

    ]
    const digits=[
        {id:"minutes",label:"",min:0,max:59},
        {id:"seconds",label:"",min:0,max:59}
    ]
    return (
        <View style={styles.container}>
            <NumberPlease values={duration} digits={digits}/>
            <TextInput  underlineColor={Colors.secondary} mode="flat" label="title" style={styles.input}/>
            <TextInput mode="flat" />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background
    },
    input:{
        margin:16,
        borderColor:Colors.secondary,
        borderRadius:8
    }
})
