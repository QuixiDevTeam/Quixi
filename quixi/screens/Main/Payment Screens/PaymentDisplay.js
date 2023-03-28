import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaymentHistory } from "./PaymentHistory";
import Paypal from "./Paypal";

const Stack = createNativeStackNavigator();

export default function PaymentDisplay({ navigation }) {
  const handlePaypalPress = () => {
    navigation.navigate("Paypal");
  };

  return (
    <View style={styles.container}>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>RS 450.00</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Payment Method </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonOne}
          onPress={handlePaypalPress}
        >
          <Image
            source={require("../assets/paypal.png")}
            style={{ width: 105, height: 120,padding:50 }}

          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOne}
          onPress={() =>
            Alert.alert("Request for confirmation sent to creditor")
          }
        >
          <Image
            source={require("../assets/byhand.png")}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  valueContainer: {
    flex: 2.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    //borderWidth: 2,
    padding: 4,
    margin: 4,
    //borderColor: "black",
  },
  value: {
    flex: 0.5,
    color: "black",
    textAlign: "center",
    fontSize: 45,
  },
  header: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom:200,
  },
  buttonOne: {
    marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
