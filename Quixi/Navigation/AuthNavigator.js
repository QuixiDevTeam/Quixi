import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Login from '../screens/Authentication/Login';
import ForgotPassword from '../screens/Authentication/ForgotPassword';
import Register from '../screens/Authentication/Register';
import PinScreen from "../screens/Authentication/EnterPin";
import VerifyEmail from "../screens/Authentication/VerifyEmail";

const Stack = createStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="PinScreen" component={PinScreen} />
            <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
        </Stack.Navigator>
    );
};