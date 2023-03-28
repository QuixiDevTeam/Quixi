import React, { useState, useRef, useEffect} from "react";
import { StyleSheet, Text, View, Button, Alert,Image , TextInput, ActivityIndicator, TouchableHighlight, FlatList} from 'react-native';
// import CustomCheckbox from './CheckBox';

export default function SplitMethods()  {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);

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
    
    return(
        
        <><View style={styles.container}>
            {isLoading ? (
            <ActivityIndicator />
          ) : (
            <><Text style={styles.text}>Split methods</Text>
            <View style={styles.con1}>
                        
                        <Button style={styles.text1}
                            title="Equally"
                            onClick={() => navigation.navigate('Details')} />

                        <Button style={styles.text1}
                            title="By Percentage"
                            onPress={() => navigation.navigate('SplitByPercentage')} />
                        <Button style={styles.text1}
                            title="By Amount"
                            onPress={() => navigation.navigate('Details')} />


            </View>
            <View style={styles.text3}>
                            <Text>Select the members , The expense need to be split equally</Text>
            </View>
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
                    <View style={styles.checkbox}>
                    {/*<CustomCheckbox />*/}
                    </View>
                </View>
                )} />                        
                        
                <View   style={styles.btn}  >   
              <TouchableHighlight >
                  <Text style={styles.btn1}>
                      Ok
                  </Text>
              </TouchableHighlight>
              </View> 
          </>
          )}
        </View>
        </>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 40,
        //marginBottom:20,
    },
    text:{
        fontSize: 20,
        textAlign: 'center',
        marginVertical:5,
       
    },
    con1:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginHorizontal:15,
        marginBottom:20,
        marginTop:20,
        borderRadius:50   
    },
    text1:{
        
        height: '150%',
        width: '30%',
        backgroundColor: '#A4E1F7',
        marginHorizontal:18,
    }, 
    text2:{
        textAlign: 'center',
        marginTop:5,   
    },
    text3:{
        marginBottom:10,
        justifyContent:'center',
        marginLeft:10,
        
    },
    text4:{
        marginTop:20,
        marginLeft: 20
    },
    flatlist:{
        //marginTop:20,
        marginLeft:20
    },
   
    item:{
        flexDirection: 'row',
        marginLeft:10,
        //alignSelf:'flex-start',
        paddingLeft:2,
        paddingTop:40,
        alignItems:'center'
    },
  
    view1:{
      width: 50,
      height:50,
      resizeMode: 'contain',
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 15,
      margin: 10,
      marginRight: 40
    },
    checkbox:{
      marginLeft: 'auto',
      marginRight: '20%',
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
});

