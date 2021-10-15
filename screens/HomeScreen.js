import React from 'react'
import { View,Text,StyleSheet,StatusBar,FlatList} from 'react-native'
import Colors from '../utils/Colors'
import FAB from '../components/Buttons/FAB'
export default function HomeScreen() {
    return (

        <View style={styles.container}>
            <StatusBar  hidden={true}/>
            <Text style={styles.text}>Hello</Text>
           <FAB />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.background,
        padding:10
    },
    text:{
        color:Colors.primary
    }
})