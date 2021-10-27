import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import Colors from "../utils/Colors";

const Stack = createStackNavigator();
export default function RootNavigator() {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}
