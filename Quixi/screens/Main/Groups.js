import * as React from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, ActivityIndicator, RefreshControl
} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "../../assets/constants/colors";
import {useEffect, useState} from "react";
import Axios from "axios"
import {GROUP_ROUTES} from "../../assets/constants/routes";
import * as SecureStore from "expo-secure-store";
import {STRINGS} from "../../assets/constants/strings";
import Icon from "react-native-vector-icons/Ionicons";
import CreateGroup from '../Main/Group Screens/CreateGroup';


export default function Groups({navigation}) {
    const [list, setList] = useState({})
    const [userId, setUserId] = useState('')
    const [token, setToken] = useState('')
    const [refreshing, setRefreshing] = useState(false)


    useEffect(() => {
        async function fetchData() {
            await getToken();
            await getUserId();
            console.log('running useState')
        }

        fetchData();
    }, []);

    useEffect(() => {
        console.log(userId, token)
        if (userId && token) {
            getGroupList();
            console.log('running getting group list')

        }
    }, [userId, token]);


    const getGroupList = async () => {
        console.log(userId)
        console.log(token)
        const url = GROUP_ROUTES.FIND_BY_USER_ID(userId.replaceAll('"', ''));
        let config = {
            method: 'get', url: url, headers: {
                authorization: 'Bearer ' + token.replaceAll('"', ''),
            },
        };
        console.log(config.url)

        Axios(config)
            .then(function (response) {
                setList(response.data);
                console.log(list)
                setRefreshing(false);
            })
            .catch(function (error) {
                console.log(error.response.message);
            });
    }
    const getUserId = async () => {
        const userId = await SecureStore.getItemAsync('userId');
        setUserId(userId);
    }

    const getToken = async () => {
        const token = await SecureStore.getItemAsync('token');
        setToken(token);
    }

    function handlePress(id) {
        console.log(id)
        navigation.navigate('Group', {groupId: id});
    }

    function onRefresh() {
        if (userId && token) {
            getGroupList();
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light"/>
            <View style={styles.bottomSheet}>
                <View style={styles.compTitle}>
                    <Text style={styles.compTitleStyle}>{STRINGS.GROUPS}</Text>
                    <TouchableOpacity style={styles.createGroupIcon} onPress={()=>navigation.navigate('CreateGroup',)} >
                        <Icon name="add-circle" size={30} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={{height: 620}}>
                    <ScrollView style={styles.scrollView}
                                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
                        {list.groups && list.groups.map((group, index) => (
                            <TouchableOpacity key={index} onPress={() => handlePress(group._id)}
                                              style={styles.groupSlot}>
                                <View style={styles.membersImageRow}>
                                    <Image style={[styles.image, styles.image1]}
                                           source={{uri: 'https://picsum.photos/id/100/200/200'}}/>
                                    <Image style={[styles.image, styles.image2]}
                                           source={{uri: 'https://picsum.photos/id/101/200/200'}}/>
                                    <Image style={[styles.image, styles.image3]}
                                           source={{uri: 'https://picsum.photos/id/102/200/200'}}/>
                                </View>
                                <View style={styles.groupRowDetail}>
                                    <Text style={styles.groupName}>{group.name}</Text>
                                </View>
                                <View style={styles.groupRowDetail}>
                                    <Text style={styles.groupCreatedBy} numberOfLines={1}>Group created
                                        by {group.description}</Text>
                                </View>
                            </TouchableOpacity>))}
                        <View style={styles.endTextContainer}>
                            <Text style={styles.endText}> End of groups list </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>);
};

const styles = StyleSheet.create({
    bottomSheet: {
        height: '100%', 
        backgroundColor: COLORS.BG, 
        width: '100%', 
        borderTopEndRadius: 50, 
        borderTopStartRadius: 50, 
        marginTop: 100
    }, 
    
    container: {
        paddingTop: 10, 
        backgroundColor: COLORS.PRIMARY,
    }, 

    groupSlot: {
        backgroundColor: 'white',
        height: 110,
        width: '85%',
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 30,
        borderRadius: 20,
        flexDirection: "column"
    }, 

    compTitle: {
        marginTop: 30, 
        justifyContent: "center", 
        alignItems: "flex-start", 
        marginHorizontal: 30, 
        flexDirection:"row", 
        justifyContent:"space-between"
    }, 

    compTitleStyle: {
        fontWeight: 'bold', 
        fontSize: 25
    }, 

    scrollView: {
        marginTop: 10, 
        borderTopEndRadius: 50, 
        borderTopStartRadius: 50, 
        marginBottom: 100
    }, 
    
    groupRowDetail: {
        flexDirection: 'row', 
        justifyContent: "space-between"
    }, 
    
    groupName: {
        fontWeight: 'bold', 
        overflow: 'hidden',
    }, 
    
    groupCreatedBy: {
        width: 200, 
        overflow: 'hidden',
    },

    groupBalance: {
        fontWeight: 'bold'
    },

    createGroupIcon:{
        marginTop: 5
    },

    membersImageRow: {
        flex: 2, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 10
    },

    image: {
        width: 30, 
        height: 30, 
        borderRadius: 50, 
        borderWidth: 2, 
        borderColor: 'white', 
        position: 'absolute',
    },

    image1: {
        top: 0, 
        left: 0, 
        zIndex: 1,
    },

    image2: {
        top: 0, 
        left: 20, 
        zIndex: 2,
    },

    image3: {
        top: 0, 
        left: 40, 
        zIndex: 3,
    }, 
    
    endTextContainer: {
        marginTop: 20, 
        justifyContent: "center", 
        alignItems: "center"
    }, 
    
    endText: {
        color: COLORS.GREY,
    }

});