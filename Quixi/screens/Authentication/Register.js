import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from "react-native";
import {useState} from "react";
import Validator from "../../services/InputValidator"
import Axios from "axios";
import {USER_ROUTES} from "../../assets/constants/routes";
import {concat} from "react-native-reanimated";

export default function Register({navigation}) {
    const [isLoading, setIsLoading] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');


    const handleRegister = () => {
        setIsLoading(true);
        let isValid = true;

        isValid = Validator.validateInput(firstName, null, setFirstNameError, 'Enter a First name');
        isValid = Validator.validateInput(lastName, null, setLastNameError, 'Enter a  Last name');
        isValid = Validator.validateInput(email, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, setEmailError, 'Enter a valid Email address');
        isValid = Validator.validateInput(password, null, setPasswordError, 'Enter a Password');
        isValid = Validator.validateInput(confirmPassword, null, setConfirmPasswordError, 'Passwords do not match');
        if (confirmPassword && confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match');
            isValid = false;
            setIsLoading(false);
        }
        isValid = Validator.validateInput(phoneNumber, /^(\+)?(\d){10,14}$/, setPhoneNumberError, 'Enter a valid Phone number');
        setIsLoading(isValid);

        if (isValid) {
            // Handle registration logic
            const name = firstName+ ' ' + lastName;
            const newUser = {
                "email": email, "name": name, "phoneNumber": phoneNumber, "address": address, "password": password
            };

            Axios.defaults.headers.post['ngrok-skip-browser-warning'] = 'value'

            const config = {
                method: 'post',
                url: USER_ROUTES.SIGNUP,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: newUser
            };
            Axios(config)
                .then((response) => {
                    Alert.alert('Successfully registered', 'You will now be redirected to the login screen', [
                        {text: 'OK', onPress: () => navigation.navigate('Login')},
                    ]);
                    setIsLoading(false);
                    console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log(error.response.data);
                    if (error.response.data.message.includes("duplicate key error")) {
                        // Display an error message to the user
                        alert("Email already exists. Please use a different email.");
                    } else {
                        // Display a generic error message to the user
                        alert("An error occurred. Please try again later.");
                    }
                    setIsLoading(false);
                });
        }
    };

    return (<SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Create an Account</Text>
                {firstNameError ? <Text style={styles.error}>{firstNameError}</Text> : null}
                <TextInput style={styles.input} placeholder="First Name" onChangeText={setFirstName} value={firstName}
                           autoCapitalize="words"/>
                {lastNameError ? <Text style={styles.error}>{lastNameError}</Text> : null}
                <TextInput style={styles.input} placeholder="Last Name" onChangeText={setLastName} value={lastName}
                           autoCapitalize="words"/>
                {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
                <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email}
                           keyboardType="email-address" autoCapitalize="none"/>
                {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
                <TextInput style={styles.input} placeholder="Password" onChangeText={setPassword} value={password}
                           secureTextEntry/>
                {confirmPasswordError ? <Text style={styles.error}>{confirmPasswordError}</Text> : null}
                <TextInput style={styles.input} placeholder="Confirm Password" onChangeText={setConfirmPassword}
                           value={confirmPassword} secureTextEntry/>
                {phoneNumberError ? <Text style={styles.error}>{phoneNumberError}</Text> : null}
                <TextInput style={styles.input} placeholder="Phone Number" onChangeText={setPhoneNumber}
                           value={phoneNumber} keyboardType="name-phone-pad"/>
                <TextInput style={styles.input} placeholder="Address" onChangeText={setAddress} value={address}/>
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Register</Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.link}>Already have an account? Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>);
};

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', paddingTop: 150

    }, scroll: {
        width: '100%'
    }, content: {
        width: '100%', maxWidth: 400, paddingHorizontal: 20,
    }, title: {
        fontSize: 24, fontWeight: 'bold', marginBottom: 10,
    }, input: {
        width: '100%', height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 10, padding: 10,
    }, button: {
        width: '100%',
        height: 50,
        backgroundColor: '#333',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    }, buttonText: {
        color: '#fff', fontSize: 18, fontWeight: 'bold',
    }, link: {
        color: '#333', fontSize: 16, marginTop: 10,
    }, error: {
        color: '#ff1717', fontSize: 10, marginBottom: 5
    }
});