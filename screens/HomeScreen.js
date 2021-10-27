import React from 'react'
import { View,Text,StyleSheet,StatusBar,FlatList} from 'react-native'
import Colors from '../utils/Colors'
import FAB from '../components/Buttons/FAB'
import priorityEnum from '../Enums/priority.enum'
import TimerItem from '../components/TimerItem'

const DATA=[
    {
        uuid:"12312",
        title:"Clean Bathroom",
        description:"I need to clean this bathroom",
        duration:"10:00",
        priority:priorityEnum.p1
    },
    {
        uuid:"asd12",
        title:"Add Sugar",
        description:"No Sugar in Bathroom",
        duration:"15:00",
        priority:priorityEnum.p2
    },
    {
        uuid:"ac123",
        title:"Record Star Wars",
        description:"I need to clean this bathroom",
        duration:"25:00",
        priority:priorityEnum.p3
    },
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