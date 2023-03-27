import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function AddExpenseButton(props) {
    const {children,  onPress} = props;
    return (
        <View style={styles.btnWrapper}>
            <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={1}>
            {children}
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    btnWrapper:{
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        marginTop: -50,
    },
    button: {
        width: 75,
        paddingHorizontal: 14,
        height: 75,
        borderRadius: 75/2,
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#9f2a2a',
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 1, width: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1
    }
});