import React,{useState} from 'react';
import { View, StyleSheet, Image,Text,TextInput,TouchableOpacity} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

const name="milan swanthra"

export default function Rate (){


 // State variables
 const [showTextbox, setShowTextbox] = useState(false);

 // Event handlers
 const handleAddNoteClick = () => {
   setShowTextbox(true);
 };

  return (
    <View style={styles.container}>
      <View style={styles.tray}>
      <View style={styles.imageContainer}>
      <Image
            source={require('../assets/Milan.png')}
            style={styles.image}
          />
      </View>
      <View style={styles.textContainer}>
            <Text style={styles.text}>`Rate {name} `</Text>
      </View>
          
        <View style={styles.ratingContainer}>
          
           <AirbnbRating
            count={5}
            reviews={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
            defaultRating={3}
            size={30}

            onFinishRating={(rating) => console.log(rating)}
          />
         </View>
         
{/* Add note */}
    <View style={styles.addNoteContainer}>
    <TouchableOpacity onPress={handleAddNoteClick}>
      <Image
        source={require('../assets/addNote.png')}
        style={styles.addNoteIcon}
      />
    </TouchableOpacity>
    {showTextbox && <TextInput style={styles.noteInput} />}
    </View>

        
       </View>
      
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010B40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tray: {
    flex: 1,
    marginTop: 100,
    width: '100%',
    height: '60%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    
  },
  imageContainer:{
    flex:0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    
  },
  ratingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 105,
    height: 120,
    alignContent: 'center',
    borderRadius: 30,
    marginBottom: 20,
  },
addNoteContainer: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
addNoteIcon: {
  width: 30,
  height: 30,
  marginBottom: 20,
},

 });

