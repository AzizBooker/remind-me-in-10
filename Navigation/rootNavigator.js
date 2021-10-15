import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack=createStackNavigator()
export default function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} 
                options={{title:"Reminders"}
                }
            />
        </Stack.Navigator>
    )
}
