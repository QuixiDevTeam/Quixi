import React, { useState, useRef, useEffect} from "react";
import { StyleSheet, Text, View, Button, Alert,Image, TouchableOpacity, TextInput} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

export default function Category(){
    
        const [isTextInputVisible, setIsTextInputVisible] = useState(false);
      
        const handleButtonPress = () => {
          setIsTextInputVisible(true);
        };
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text1} >Expense Category</Text>
            </View>
            <View style={styles.viewnew}>
            <TouchableOpacity>
                <View style={styles.view}>
                    <Image 
                    style={styles.view1}
                    source={require('../assets/transport.png')} ></Image>
                    <Text style={styles.txt}>Transpotation</Text>
                </View>
            </TouchableOpacity>
                <View style={styles.view}>
                    <Image 
                    style={styles.view1}
                    source={require('../assets/food.png')} ></Image>
                    <Text style={styles.txt}>Food and Drink</Text>
                </View>
                <View style={styles.view}>
                    <Image 
                    style={styles.view1}
                    source={require('../assets/entertainment.png')} ></Image>
                    <Text style={styles.txt}>Entertainment</Text>
                </View>
                <View style={styles.view}>
                    <Image 
                    style={styles.view1}
                    source={require('../assets/home.jpg')} ></Image>
                    <Text style={styles.txt}>Home</Text>
                </View>
                <View style={styles.view}>
                    <Image 
                    style={styles.view1}
                    source={require('../assets/Utilities.png')} ></Image>
                    <Text style={styles.txt}>Utilities</Text>
                </View>
                <View style={styles.view}>
                {isTextInputVisible ? (
                    <TextInput placeholder="Enter Category" />
                ) : (
                    // <Button title="Open Text Input" onPress={handleButtonPress} />
                    <TouchableOpacity onPress={handleButtonPress}  >
                        <FontAwesome name='plus' size={25} color='black'   />
                        <Text style={styles.txt}>Add new</Text>
                    </TouchableOpacity>
                )}
                  
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        //justifyContent: 'flex-start',
        marginTop: 50,    
    },
    header:{
        //flex:1,
        marginBottom: 40
        
    },
    view:{
        flexDirection:'row', 
        marginTop:40, 
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset:{width:10 , height: 10},
        elevation: 5,
        shadowOpacity: 1,
        borderRadius: 15,
        paddingRight: 20,
        padding:10,
        paddingLeft:25
    
    //marginHorizontal:18,
    //marginTop: 20,
    },
    view1:{
        width: 40,
        height:40,
        borderColor: 'black',
        border: 1
        //padding: 10,

        //backgroundColor: 'white',
        //,
        //elevation: 3,
        //justifyContent:'space-between',
        //borderRadius: 15,
        //margin: 10,  
        //borderStartColor:'black'   
  },
  text1:{
    fontSize: 25, 
  },
  txt:{
    fontSize: 15,
    marginLeft:20
    //fontFamily:'sans-serif-light'
    
  },
  viewnew:{
    marginLeft:5,
    
  },
})

