import React, {useState} from 'react';
import {View , Text , StyleSheet} from 'react-native'
import {colors} from '../utils/colors';
import {TextInput} from'react-native-paper';
import {RoundedButton} from '../components/roundedbutton'
import {fontSizes,spacing} from '../utils/sizes'



export const Focus =({addSubject}) => {
  const[subject , setSubject] = useState(null);
  
 return (
<View style ={styles.container}>
<Text style={styles.text}> Focus Feature</Text>
  <View  style={styles.inputContainer} >
      
      
      <TextInput style={styles.textInput} onChangeText={setSubject} label ="What Would You like to focus on ? "/>
      <Text>{subject}</Text>

      <View style={styles.buttonContainer}>
      <RoundedButton style={styles.button}  title='+' size={50}
       onPress={() => addSubject(subject)} />
      </View>
  
  </View>
</View>


)}

const styles = StyleSheet.create({
//////
conrainer :{
flex:1

},
//////
inputContainer :{
padding: spacing.lg,
flexDirection:"row",
},
//////
textInput:{
flex:1,
marginRight:spacing.sm,

},
/////
button:{



},
////
buttonContainer:{
justifyContent:"center",


},

})