import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import Colors from '../utils/Colors'

//TODO On Click open popup
//TODO  
export default function SetTimeWidget() {
    return (
        <View>
             <Text style={styles.text}>10:00 </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    text:{
        color:Colors.primary
    }
})
