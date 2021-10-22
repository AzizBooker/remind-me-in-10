import React from 'react'
import { View,Text,StyleSheet,StatusBar,FlatList} from 'react-native'
export default function TimerItem({item}) {
    console.log(item)
    return (
         <View>
             <Text>item.title</Text>
         </View>
    )
}

const styles=StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'flex-start',
        flexDirection:'row'
    }
})