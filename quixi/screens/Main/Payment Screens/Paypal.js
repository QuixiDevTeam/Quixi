import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';

export default function Paypal ({ navigation }) {
  const [email, setEmail] = useState('');
  const [value, setValue] = useState('');
  const [person,setPerson]= useState('');

  const handleInputChange = (text) => {
    // filter out any non-numeric characters
    const numericValue = text.replace(/[^0-9]/g, '');
    setValue(numericValue);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const hadnlePersonChange=(text)=>{
    setPerson(text);
  }

  const handleSubmit = () => {
    // handle submitting the form and navigating to the next page
    navigation.navigate('NextPage');
  };

  return (
    <View>
      <View style={{ //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20 }}>
        <Image
          source={require("../assets/paypal.png")}
          style={{ width: 105, height: 120 }}
        />
      </View>
      <View>
        <Text style={styles.text}>Enter your PayPal email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          onChangeText={handleEmailChange}
          value={email}
        />
      </View>
      <View>
        <Text>Input amount you wish to pay</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={handleInputChange}
          value={value}
        />
      </View>
      <View>
        <Text>receiver Paypal email </Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          keyboardType="numeric"
          onChangeText={handleInputChange}
          value={value}
        />
      </View>
      <Button style={styles.button} title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles=StyleSheet.create({
  text: {
    textAlign: 'left',
    marginLeft: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  button:{
    margin: 10,
    padding:10,
    color:'black',
  }
});
