import * as React from 'react';
import {Text, View, StyleSheet, StatusBar, SafeAreaView} from "react-native";
import {STRINGS} from "../../assets/constants/strings";
import {COLORS} from "../../assets/constants/colors";

export default function Activity({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light"/>
            <View style={styles.bottomSheet}>
                <View style={styles.compTitle}>
                    <Text style={styles.compTitleStyle}>{STRINGS.ACTIVITY}</Text>
                </View>
                <View style={{height: '100%'}}>

                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bottomSheet: {
        height: '100%',
        backgroundColor: COLORS.BG,
        width: '100%',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        marginTop: 10
    },
    container: {
        paddingTop: 10,
        backgroundColor: COLORS.PRIMARY,
    },
    containerStyle: {
        backgroundColor: "#F2F2F2",
        border: 0,
        height: 0,
        borderBottomWidth: 0,
        borderTopWidth: 0
    },
    compTitle: {
        marginTop: 30,
        justifyContent: "center",
        //alignItems: "left",
        marginHorizontal: 30,
    },
    compTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25
    },
});