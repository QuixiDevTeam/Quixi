
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, View, TextInput,Image,TouchableHighlight} from 'react-native';
import CustomCheckbox from './CheckBox';
import {FontAwesome} from '@expo/vector-icons';
import PaidAmount from './PaidAmount';
import AddExpense from '../../Main/AddExpense';

const SplitAmount = ({navigation}) => {
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
  

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <><View style={styles.header}>
            <FontAwesome  name='arrow-left' size={25} color='black'   />
            <Text style={styles.text1}>Paid By</Text>
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
                  <CustomCheckbox />
                </View>
              </View>
            )} />

            <View style={styles.more}>
            <Text onPress={() => navigation.navigate('PaidAmount')}>More people</Text>
            </View>
            <View style={styles.btn}>
              <TouchableHighlight  onPress={()=>navigation.navigate('AddExpense')}>
                  <Text style={styles.btn1}>
                      Ok
                  </Text>
              </TouchableHighlight>
          </View></>
       
      )}
    </View>
  );
          }

export default SplitAmount

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    header:{
        //marginBottom: 100
        paddingTop:'10%',
        //height:20,
        //width:'100%',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:20,

        
    },
    text1:{
        fontSize:25,
        alignItems:'center',
        //marginTop:20,
        marginLeft:'25%'

    }, 
    flatlist:{
        marginTop:40,
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
  more:{
    marginLeft:50
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
})