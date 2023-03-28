import {React, useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';
import { elevation } from './styles';
import {FontAwesome} from '@expo/vector-icons';

const GroupExpenses=()=>{

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Optimus</Text>
            </View>
            <View style={styles.tray}>
             <View style={[styles.firstcontainer,styles.elevation]} />
             

            </View>
        </View>
    )
}
export default GroupExpenses;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#010B40',
      alignItems: 'center',
      width: '100%',
      height: '100%',
   },
   text:{
    color: 'white',
    alignItems: 'center',
    marginTop: '15%',
    fontSize:26,
  },
  header:{
    alignContent:'center',
    flexDirection: 'row',

  },
  tray: {
    flex:1,
    marginTop: '20%',
    width: '100%',
    backgroundColor: 'white',
    borderTopStartRadius:30,
    borderTopEndRadius: 30,  
  },
  elevation,
  firstcontainer:{
    flexDirection:'row',
    height: 150,  
  },

})