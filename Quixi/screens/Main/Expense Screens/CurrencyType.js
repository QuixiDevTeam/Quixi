import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableHighlight } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
//import { useNavigation } from '@react-navigation/native';

export default function CurrencyType() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();
  //const navigation = useNavigation();

  const items = [
    { label: 'LKR', value: 'LKR' },
    { label: 'USD', value: 'USD' },
    { label: 'Russian ruble', value: 'Russian ruble' },
    { label: 'Afghan afghani', value: 'Afghan afghani' },
    { label: 'Euro', value: 'Euro' },
    { label: 'Argentine peso', value: 'Argentine peso' },
    { label: 'Aruban florin', value: 'Aruban florin' },
  ];

  return (
    <View>
    
          <View style={styles.container}>
              <View style={styles.header}>
                  <Text style={styles.text1}>Currency Type</Text>
              </View>
          </View>
          <View style={styles.text}>
              <Text>Select the Currency Type</Text>
          </View>
          <View style={styles.dropdown}>
              <DropDownPicker
                  items={items}
                  open={isOpen}
                  setOpen={() => setIsOpen(!isOpen)}
                  value={currentValue}
                  setValue={(val) => setCurrentValue(val)}
                  maxHeight={200}
                  autoScroll
                  placeholder='Select Currency'
                  placeholderStyle={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}
                  showTickIcon={true} />
          </View>
          <TouchableHighlight>
            <View style={styles.btn}>
              <Button 
                  title="Add"
                  color="#071852"
                  onPress={() => Alert.alert('Cancel Pressed')}/>
            </View>
          </TouchableHighlight>

     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'flex-start',
  },
  header: {
    marginTop: 50,
  },
  text1: {
    marginTop: 10,
    fontSize: 25,
  },
  text: {
    height:30,
    width:'100%',
    marginBottom: '5%'
  },
  dropdown: {
    paddingBottom: 500,
    paddingHorizontal: 10
  },
  btn: {
    marginBottom:50,
    paddingLeft:'70%',
     
  }
});
