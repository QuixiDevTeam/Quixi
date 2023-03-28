import {StatusBar} from 'expo-status-bar';
import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import {COLORS} from '../../../assets/constants/colors'
import {useEffect, useState} from "react";
import * as SecureStore from "expo-secure-store";
import Axios from "axios";

import {GROUP_ROUTES} from "../../../assets/constants/routes"; // Importing the endpoint for group

const Group = ({navigation, route}) => {

    const { groupId } = route.params;

    const [userId, setUserId] = useState('')
    const [token, setToken] = useState('')
    const [group, setGroup] = useState({})
    const [members, setMembers] = useState(null)

    useEffect(() => {
        async function fetchData() {
            await getToken();
            await getUserId();
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (userId && token) {
            getGroupData();
        }
    }, [userId, token]);
    const getUserId = async () => {
        const userID = await SecureStore.getItemAsync('userId');
        setUserId(userID);
    }

    const getToken = async () => {
        const token = await SecureStore.getItemAsync('token');
        setToken(token);
    }

    function getGroupData() {
        const url = GROUP_ROUTES.FIND+'?id='+groupId;
        let config = {
            method: 'get', url: url, headers: {
                authorization: 'Bearer ' + token.replaceAll('"', ''),
            },
        };
        Axios(config)
            .then(function (response) {
                setGroup({...response.data})
                // setMembers(response.data.members)


                console.log()
            })
            .catch(function (error) {
                console.log(error.response.message);
            });
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light"/>
            <View style={styles.bottomSheet}>
                <TouchableOpacity style={styles.addMembersSign}>
                    <Ionicons name="add-circle-outline" size={24} color="black"/>
                    <Text> Add members</Text>
                </TouchableOpacity>
                <View style={styles.btnSet}>
                    <TouchableOpacity>
                        <Text style={styles.btnSetText}>Settle Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.btnSetText}>Balance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.btnSetText}>View Charts</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 30}}>
                    <TouchableOpacity style={styles.groupPageIconLine}>
                        <Ionicons name="copy" size={24} color="black"/>
                        <Text style={[styles.groupIconText, {color: 'black'}]}>Copy Group Link</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.groupPageIconLine}>
                        <Ionicons name="create" size={24} color="grey"/>
                        <Text style={[styles.groupIconText, {color: 'grey'}]}>Edit Group</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.groupPageIconLine}>
                        <Ionicons name="trash-outline" size={24} color="red"/>
                        <Text style={[styles.groupIconText, {color: 'red'}]}>Delete Group</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    bottomSheet: {
        height: '100%',
        backgroundColor: COLORS.BG,
        width: '100%',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        marginTop: 40
    },
    container: {
        paddingTop: 10,
        backgroundColor: COLORS.PRIMARY,
    }
    ,
    addMembersSign: {
        marginTop: 50,
        paddingLeft: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnSet: {
        flexDirection: 'row',
        marginTop: 30,
        marginHorizontal: 20
    },
    btnSetText: {
        fontSize: 13,
        color: '#000000',
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
        width: 100,
        height: 39,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        marginLeft: 10
    },
    groupPageIconLine: {
        flexDirection: 'row',
        marginTop: 50,
        marginHorizontal: 30,
        alignItems: 'center',
    },
    groupIconText: {
        justifyContent: 'center',
        paddingHorizontal: 10
    }
})
export default Group;