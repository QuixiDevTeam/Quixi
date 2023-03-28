import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    StatusBar,
    Image,
    SafeAreaView,
    RefreshControl,
    TouchableOpacity
} from "react-native";
import {SearchBar} from "react-native-screens";
import {useEffect, useState} from "react";
import {COLORS} from "../../assets/constants/colors";
import {STRINGS} from "../../assets/constants/strings";
import * as SecureStore from "expo-secure-store";
import {EXPENSE_ROUTES, GROUP_ROUTES, USER_ROUTES} from "../../assets/constants/routes";
import Axios from "axios";

export default function Friends({navigation}) {
    const [searchText, setSearchText] = useState('')
    const [refreshing, setRefreshing] = useState(false)
    const [list, setList] = useState([])
    const [userId, setUserId] = useState('')
    const [token, setToken] = useState('')

    useEffect(() => {
        async function fetchData() {
            await getUserId();
            await getToken();
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (token && userId) {
            getFriends()
        }
    }, [token, userId]);


    const getUserId = async () => {
        const userId = await SecureStore.getItemAsync('userId');
        setUserId(userId);
    }
    const getToken = async () => {
        const token = await SecureStore.getItemAsync('token');
        setToken(token);
    }

    async function getFriends() {
        const url = EXPENSE_ROUTES.TRANSACTION.FIND_PENDING_TRANSACTIONS_BY_USER_ID(userId.replaceAll('"', ''));
        console.log(url, '\n\n')
        let config = {
            method: 'get', url: url, headers: {
                authorization: 'Bearer ' + token.replaceAll('"', ''),
            },
        };

        Axios(config)
            .then((response) => {
                // console.log(JSON.stringify(response.data));
                summarize(response.data)
                setRefreshing(false);
            })
            .catch((error) => {
                console.log(error.response.message);
            });
    }

    function onRefresh() {
        getFriends()
    }

    function summarize(transactions){
        let l = [];
        for (const transaction of transactions){
            if (transaction.paidTo._id === userId.replaceAll('"', '')){
                const result = l.find(({ owes }) => owes === transaction.paidBy._id);
                if (!result){
                    l.push({
                        id: transaction.paidBy._id,
                        name: transaction.paidBy.name,
                        img: transaction.paidBy.profileImgUrl,
                        owes: transaction.amount
                    })
                }else{
                    result.amount += transaction.amount
                }
            }else{
                const result = l.find(({ owed }) => owed === transaction.paidTo._id);
                if (!result){
                    l.push({
                        _id: transaction.paidTo._id,
                        name: transaction.paidTo.name,
                        img: transaction.paidTo.profileImgUrl,
                        owed: transaction.amount
                    })
                }else{
                    result.amount += transaction.amount
                }
            }
        }
        setList(l)
    }

    function handlePress(friend) {
        console.log(friend)
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light"/>
            <View style={styles.bottomSheet}>
                <View style={styles.compTitle}>
                    <Text style={styles.compTitleStyle}>{STRINGS.FRIENDS}</Text>
                </View>
                <View style={{height: '100%'}}>
                    <ScrollView style={styles.scrollView}
                                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
                        {list && list.map((friend, index) => (
                            <TouchableOpacity style={styles.friendSlot} key={index} onPress={()=>handlePress(friend)}>
                                <View style={styles.containerFriend}>
                                    <Image source={{'uri': friend.img}}
                                           style={styles.friendImage}/>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.friendName}>{friend.name}</Text>
                                        <View style={styles.typeAndOweAmount}>
                                            <Text style={{fontSize: 15}}>{friend.owes? "You are owed": "You owe"}</Text>
                                            <Text style={styles.oweAmount}>Rs.{friend.owes || friend.owed}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>))}
                        <View style={styles.endTextContainer}>
                            <Text style={styles.endText}> End of friends list </Text>
                        </View>
                    </ScrollView>

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
    inputContainerStyle: {
        backgroundColor: '#D9D9D9',
        height: 40,
        borderRadius: 10
    },
    bottomSheetLine: {
        height: 4,
        width: 75,
        backgroundColor: '#D0D0D0',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 5
    },
    scrollView: {
        marginTop: 10,
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        marginBottom: 100
    },
    friendSlot: {
        backgroundColor: 'white',
        height: 110,
        width: '85%',
        marginTop: 20,
        paddingHorizontal: 20,
        marginHorizontal: 30,
        borderRadius: 20,
    },
    containerFriend: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: "center",
    },
    textContainer: {
        width: '70%',
        marginLeft: 20,
        flexDirection: "column",
    },
    friendImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: COLORS.WHITE,
    },
    friendName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5
    },
    typeAndOweAmount: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    oweAmount: {
        fontSize: 15,
        fontWeight: 'bold'
    }, endTextContainer: {
        marginTop: 20, justifyContent: "center", alignItems: "center"
    }, endText: {
        color: COLORS.GREY,
    }
});