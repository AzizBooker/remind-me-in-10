import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import NewReminderModal from "../screens/NewReminderModal";
import ReminderInfoModal from "../screens/ReminderInfoModal";
import React from "react";
import Colors from "../utils/Colors";

const Stack = createStackNavigator();
export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="New Reminder Modal">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Reminders",
        headerTintColor:Colors.primary,
        headerStyle:{
            backgroundColor:Colors.background,
            elevation:0,
            borderBottomWidth:1,
        }
        }}
      />
      <Stack.Screen name="New Reminder Modal"  component={NewReminderModal} options={
        {presentation:'modal',
        title:"",
        headerTintColor:Colors.primary ,
        headerStyle:{
        backgroundColor:Colors.background,elevation:0,borderBottomWidth:0
      }}} />
      <Stack.Screen name="InfoModal" component={ReminderInfoModal} 
      options={{
        presentation:'modal',
        title:"",
      headerTintColor:Colors.primary,
      headerStyle:{
        backgroundColor:Colors.background,elevation:0,borderBottomWidth:0
      }}  }/>
    </Stack.Navigator>
  );
}
