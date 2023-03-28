import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, View, TextInput,Image, TouchableHighlight} from 'react-native';
import { ListItem, SearchBar } from "react-native-elements";
import CustomCheckbox from './CheckBox';


const SplitAmong = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //const [title, setTitle] = useState([]);

 

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
      setTitle(json.title);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
//use effect
  useEffect(() => {
    getMovies();
  }, []);
  

  return (
    <><View style={styles.container}>
          {isLoading ? (
              <ActivityIndicator />
          ) : (
              <View style={styles.header}>

                  <SearchBar style={styles.search}
                      placeholder="Name, E-mail or Phone No"
                      lightTheme
                      //   round
                      //   onChangeText={(text) => this.searchFunction(text)}
                      autoCorrect={false} />

                  <FlatList style={styles.flatlist}

                      data={data}
                      keyExtractor={({ id }) => id}
                      renderItem={({ item }) => (
                          <View style={styles.item}>
                              <Image
                                  style={styles.view1}
                                  source={require('../assets/person.jpg')}></Image>
                              <Text>
                                  {item.title}
                              </Text>
                              <View style={styles.checkbox} >
                                    <CustomCheckbox />
                              </View>

                          </View>
                      )} />
              </View>
          )}
      </View><View style={styles.btn}>
              <TouchableHighlight >
                  <Text style={styles.btn1}>
                      Ok
                  </Text>
              </TouchableHighlight>
          </View></>
    
  );
          }

export default SplitAmong;

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    header:{
        marginTop: 75,
        //padding: 10,
    },
     
    flatlist:{
        marginTop:10,
        
    },
    item:{
    
        flexDirection: 'row',
        alignItems: 'center',
        //paddingLeft: 10,
        paddingTop: 25,
       
    },
   
    view1:{
        width: 50,
        height:50,
        resizeMode: 'contain',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15,
        //margin: 10,
        marginRight: 50
    },
    search:{
        //width:150
    },
    btn1: {
        
        borderWidth: 2,
        padding: 15,
        //paddingHorizontal:50,
        borderColor: 'black',
        color: 'white',
        backgroundColor: '#010B40',
        fontSize:18
        
    },
    btn:{
        //alignItems:'flex-end',
        marginTop:20,
        marginRight:20,
        marginLeft:'75%',
        height:50,
        marginBottom:50
    },
    checkbox:{
        marginLeft: 'auto',
        marginRight: 5,
        //marginLeft:50
    },
    
})