import React, {useRef, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';

export default function PinScreen({navigation}) {
    const [pin, setPin] = useState('');
    const pinInputs = useRef([]);

    const handlePinChange = (index, value) => {
        // const newPin = pin.split('');
        // newPin[index] = value;
        // setPin(newPin.join(''));
        // if (value && index < 3) {
        //     pinInputs.current[index + 1].focus();
        // } else if (!value && index > 0) {
        //     pinInputs.current[index - 1].focus();
        // }
        if (value!=='') {
            switch (index) {
                case 0:
                    const x = pin.split('');
                    x[index] = value;
                    setPin(x.join(''));
                    pinInputs.current[1].focus();
                    break
                case 1:
                    const y = pin.split('');
                    y[index] = value;
                    setPin(y.join(''));
                    pinInputs.current[2].focus();
                    break
                case 2:
                    const z = pin.split('');
                    z[index] = value;
                    setPin(z.join(''));
                    pinInputs.current[3].focus();
                    break
                case 3:
                    const w = pin.split('');
                    w[index] = value;
                    setPin(w.join(''));
                    break
                default:
                    break
            }
        }
    };

    const handlePinSubmit = () => {

    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Enter your 4-digit PIN</Text>
                <View style={styles.pinContainer}>
                    {[0, 1, 2, 3].map((index) => (
                        <TextInput
                            key={index}
                            style={styles.pinInput}
                            onChangeText={(text) => handlePinChange(index, text)}
                            value={pin[index] || ''}
                            keyboardType="numeric"
                            maxLength={1}
                            ref={(ref) => (pinInputs.current[index] = ref)}
                        />
                    ))}
                </View>
                <TouchableOpacity style={styles.button} onPress={handlePinSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: '100%',
        maxWidth: 400,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    pinContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    pinInput: {
        width: '20%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    pinInputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 20,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#333',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
