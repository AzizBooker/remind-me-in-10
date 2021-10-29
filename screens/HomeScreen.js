import React from 'react'
import { View,Text,StyleSheet,StatusBar,FlatList} from 'react-native'
import Colors from '../utils/Colors'
//import FAB from '../components/Buttons/FAB'
import { FAB } from 'react-native-paper'
import priorityEnum from '../Enums/priority.enum'
import TimerItem from '../components/TimerItem'
import Reminder from '../Models/reminder.model'
import { useSelector } from 'react-redux'


export default function HomeScreen({navigation}) {
    const DATA=useSelector(state=>state.ReminderSlice.reminders)

    const renderItem=({item})=>(
       <TimerItem item={item} />
    )

    return (
        <View style={styles.container}>
        <StatusBar  hidden={true}/>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={item=>item.uuid} />
        <View style={styles.fabContainer}>
          <FAB style={styles.fab} icon="plus" onPress={()=>{navigation.navigate('New Reminder Modal')}} />
        </View>
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
    },
    fabContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    fab:{
        borderRadius:80,

    }
})