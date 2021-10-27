import React from 'react'
import { View,Text,StyleSheet,StatusBar,FlatList} from 'react-native'
import Colors from '../utils/Colors'
import FAB from '../components/Buttons/FAB'
import priorityEnum from '../Enums/priority.enum'
import TimerItem from '../components/TimerItem'
import Reminder from '../Models/reminder.model'
const DATA=[
    new Reminder('12313',"Reminder Test","Description","10:00",priorityEnum.p1),
    new Reminder('12312',"Reminder Test 2","Description2","11:00",priorityEnum.p1),
    new Reminder('12310','Priority Test 3','Test priority')
    
]

export default function HomeScreen() {
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