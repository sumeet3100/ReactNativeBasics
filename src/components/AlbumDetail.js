import React from 'react';
import {Text, View, Image, Linking } from 'react-native';
import Card from  './Card';
import CardComponent from './CardComponent';
import { Button} from 'react-native-elements';

const AlbumDetail = ({data}) =>{

  const{title, artist, thumbnail_image, image, url} =data;


onClick()
{

}
return (
  <Card>
  <CardComponent>
  <View style = {styles.thumbnailContainerStyle}>
    <Image style = {styles.thumbnailStyle}
     source = {{uri: thumbnail_image}} />
  </View>

  <View style ={styles.headerConstraintStyle}>
  <Text style = {styles.headerTextStyle}>{title}</Text>
  <Text>{artist}</Text>
  </View>
  </CardComponent>

  <CardComponent>

    <Image style = {styles.imageFullStyle}
      source = {{uri: image }}/>

  </CardComponent>
<View style = {styles.buttonContainerStyle}>
  <Button
    iconLeft
    icon={{name: 'code'}}
    title='Buy this album!'
    buttonStyle={styles.buttonStyle}
    onPress={()=> Linking.openURL(url)}
   />
  </View>
  </Card>
);
};



const styles =  {

  headerConstraintStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  thumbnailStyle:{
    width:50,
    height:50
  },
  thumbnailContainerStyle:{
    justifyContent:'center',
    alignItems: 'center',
    marginLeft:10,
    marginRight: 10
  },
  headerTextStyle:{
    fontSize: 18,
  },
  imageFullStyle:{
    height: 300,
    flex:1,
    width: null
  },

  buttonStyle:{
    backgroundColor: 'red',
    borderRadius: 2,
    justifyContent:'center',
    alignItems: 'center',
    alignSelf:'center',
    width: '100%'

  },
  buttonContainerStyle:{
    justifyContent:'center',
    alignItems: 'center',

    backgroundColor:'red'


  }

};

export default AlbumDetail;
