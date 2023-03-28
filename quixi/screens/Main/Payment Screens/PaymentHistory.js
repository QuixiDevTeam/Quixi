import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function PaymentHistory() {
  return (
    <View style={styles.container}>
      <Text style= {styles.text}>Transaction history</Text>
      <View style={styles.tray}>
        <View style={styles.firstcontainer}>
          

        </View>
        <View style={styles.firstcontainer}>
          <Text style={styles.text2}>Expense Details</Text>
            <TextInput style={styles.input}
              placeholder='Enter a description' />

        </View>
        <View style={styles.firstcontainer}>
          <Text style={styles.text2}>Paid By</Text>

        </View>
        <View style={styles.firstcontainer}>
          <Text style={styles.text2}>Add a receipt</Text>

        </View>
        <View style={styles.firstcontainer}>
          <Text style={styles.text2}>Add a date</Text>

        </View>
        <View style={styles.firstcontainer}>
          <TextInput style={styles.input} 
          placeholder = 'Add comment'/>

        </View>
        

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010B40',
    alignItems: 'center',
    width: 400,
    height: 100,
 },
  text:{
    color: 'white',
    //alignItems: 'center',
    marginTop: 50,
    fontSize:24,
  },
  tray: {
    flex:1,
    marginTop: 70,
    width: '100%',
    height: '80%',
    backgroundColor: 'white',
    //justifyContent: 'center',
    borderTopStartRadius:30,
    borderTopEndRadius: 30,
    
  },
  firstcontainer:{
    //justifyContent: 'center',
    flexDirection:'row',
    width: '90%',
    height: 80,
    backgroundColor: 'white',
    shadowColor:'black',
    shadowOffset:{width:5,height:5},
    elevation:5,
    shadowOpacity:1,
    borderRadius: 15,
    marginHorizontal:18,
    //boarderOpacity: 0.5,
    marginTop: 20,
    //alignItems: 'center',
    
  },
  view1:{
    width: 50,
    height:50,
    backgroundColor: 'yellow',
    justifyContent:'space-between',
    borderRadius: 15,
    margin: 10

  },
  text2:{
    marginLeft: 10,
    color: 'white',
    marginTop:10,
    fontSize:16,
  },
  input: {
    textAlign:'left',
    width: 100,
    color: 'white',
    height: 20,
    marginTop: 30,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
  }
  // btn1: {
  //   flexDirection: 'row',
    
  // }
            

});