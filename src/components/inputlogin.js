
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import { Button, CheckBox, Divider } from 'react-native-elements';

const Inputlogin = (props) =>{
const {textStyle, viewStyle,textinputStyle, buttonStyle} = styles;
  return(
        <View style = {viewStyle}>
        <TextInput style={textinputStyle}
        placeholder={props.userName}
        returnKeyType = 'next'
        keyboardType= 'email-address'
        />
        <TextInput style={textinputStyle}
        placeholder={props.hintPassword}
        returnKeyType = 'done'
        keyboardType = 'numeric'
        />

        <CheckBox
          center
          title='Remmeber me'
          checkedIcon='dot-circle-o'
           uncheckedIcon='circle-o'
        />
<Divider style={{ backgroundColor: 'blue' }} />
    <Button

     raised
     icon={{name: 'home', size: 20}}
     buttonStyle={{backgroundColor: 'blue', borderRadius: 2, marginTop:5, marginBottom:5 }}
     textStyle={{textAlign: 'center'}}
     title={props.buttonTitle}
     />
</View>



  );
};


const styles = {
  viewStyle:{
    backgroundColor: '#F8F8F8',


    paddingTop:15,
    shadowColor: '#000',
    shadowOffset:{ width:0, height: 2},
    shadowOpacity:0.5,
    elevation:2,
    position: 'relative'
  },
  textStyle:{
      fontSize: 20
  },
  textinputStyle:{
      fontSize: 20,
      borderColor: 'gray',
       borderWidth: 1,
       height: 40,
       margin:5,
       paddingLeft: 10
  },
  buttonStyle:{
      backgroundColor: 'blue',
       borderWidth: 1,
       height: 20,
       justifyContent: 'center',
       borderRadius: 5
  }



};

// Make the componenet aviable for other parts of the app.
export default Inputlogin;
