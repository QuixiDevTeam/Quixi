import React, {useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Groups from "../screens/Main/Groups"
import Group from "../screens/Main/Group Screens/Group"
import CreateGroup from "../screens/Main/Group Screens/CreateGroup"

// Importing the createStackNavigator function from the react-navigation-stack library
const Stack = createStackNavigator(); 

// Defining a functional component called GroupNavigator that returns a stack navigator
export default function GroupNavigator() {
    return (

        // Configuring the stack navigator with an initial route name and screen options
        <Stack.Navigator
            initialRouteName="Groups"
            screenOptions={{headerShown: false}}>  
            
            <Stack.Screen name="Groups" component={Groups}/>  
            <Stack.Screen name="Group" component={Group}/>
            <Stack.Screen name="CreateGroup" component={CreateGroup}/>

        </Stack.Navigator>
    );
};