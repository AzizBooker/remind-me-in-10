import React from 'react'
import { View,Text,StyleSheet,StatusBar,FlatList} from 'react-native'
import Colors from '../utils/Colors'
import FAB from '../components/Buttons/FAB'
import priorityEnum from '../Enums/priority.enum'
import TimerItem from '../components/TimerItem'
import Reminder from '../Models/reminder.model'
import { useSelector } from 'react-redux'


export default function HomeScreen() {
    console.log(useSelector((state)=>state.ReminderSlice.reminders))
    const DATA=useSelector(state=>state.ReminderSlice.reminders)

    const renderItem=({item})=>(
       <TimerItem item={item} />
    )

    return (
        <View style={styles.container}>
        <StatusBar  hidden={true}/>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={item=>item.uuid} />
           <FAB />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-start",
        backgroundColor:Colors.background,
        padding:10
    },
    text:{
        color:Colors.primary
    }
})