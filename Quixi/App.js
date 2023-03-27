import React from "react";
import {useState, useEffect, useCallback} from "react";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Homepage from './screens/Homepage';
import Login from './screens/Authentication/Login';
import Registration from './screens/Authentication/Register';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from "./Navigation/AuthNavigator";


export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="dark"/>
            {/*<SafeAreaView style={styles.container}>*/}
            {/*    <Text>Screen placeholder</Text>*/}
            {/*</SafeAreaView>*/}
            <AuthNavigator/>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
