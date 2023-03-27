import React, {useState} from 'react'
import {StyleSheet, SafeAreaView, Text, TextInput, View, ActivityIndicator, TouchableOpacity,} from 'react-native';
import TextLink from "../../components/Buttons/TextLink";
import Validator from "../../services/InputValidator"
import {USER_ROUTES} from "../../assets/constants/routes";
import Axios from "axios";
import * as SecureStore from 'expo-secure-store';


export default function Login({navigation, route}) {

    const { setUserToken } = route.params;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
        setIsLoading(true);

        let isValid;

        isValid = Validator.validateInput(email, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, setEmailError, 'Enter a valid email');
        isValid = Validator.validateInput(password, null, setPasswordError, 'Enter a  Last name');
        setIsLoading(isValid);

        if (isValid) {
            const data = {'email': email, 'password': password};

            Axios.defaults.headers.post['ngrok-skip-browser-warning'] = 'value'

            const config = {
                method: 'post', url: USER_ROUTES.LOGIN, headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }, data: data
            };

            Axios(config)
                .then(async (response) => {
                    const token = JSON.stringify(response.data.token);
                    const userId = JSON.stringify(response.data.user._id);
                    await SecureStore.setItemAsync('userId', userId)
                    SecureStore.setItemAsync('token', token)
                        .then(() => {
                            console.log('Token saved successfully');
                            setIsLoading(false);
                            setUserToken(token);
                        })
                        .catch(error => {
                            console.log('Error saving token: ', error);
                            alert("Error");
                            setIsLoading(false);
                        });
                })
                .catch((error) => {
                    console.log(error.response.data);
                    if (error.response.data.message.includes("Invalid login credentials")) {
                        alert("Invalid login credentials");
                    } else {
                        alert("An error occurred. Please try again later.");
                    }
                    setIsLoading(false);
                });
        }
    };

    return (<SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>Login</Text>
            {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
            <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email}
                       keyboardType="email-address" autoCapitalize="none" secureTextEntry={false}/>
            {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
            <TextInput style={styles.input} placeholder="Password" onChangeText={setPassword} value={password}
                       secureTextEntry={true}/>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                {isLoading ? (<ActivityIndicator size="small" color="#fff"/>) : (
                    <Text style={styles.buttonText}>Login</Text>)}
            </TouchableOpacity>
            <TextLink styles={styles.link} onPress={() => navigation.navigate('ForgotPassword')}
                      text="Forgot password?" style={styles.link}/>
            <TextLink styles={styles.link} onPress={() => navigation.navigate('Register')} text="Create an account"
                      style={styles.link}/>
        </View>
    </SafeAreaView>);
};

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
    }, content: {
        width: '100%', maxWidth: 400, paddingHorizontal: 20,
    }, title: {
        fontSize: 24, fontWeight: 'bold', marginBottom: 20,
    }, input: {
        width: '100%', height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 10
    }, button: {
        width: '100%',
        height: 50,
        backgroundColor: '#333',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }, buttonText: {
        color: '#fff', fontSize: 18, fontWeight: 'bold',
    }, link: {
        marginTop: 10,
    }, error: {
        color: '#ff1717', fontSize: 10, marginBottom: 5
    }
});