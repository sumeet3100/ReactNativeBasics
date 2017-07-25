/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';
import Inputlogin from './src/components/inputlogin';
import AlbumList from './src/components/AlbumList';



export default class Thirdproject extends Component {
  render() {
    return (

      <View style={styles.container}>
       {<Header headerText ={'Albums Login'}/>}
      { /*<Inputlogin hintPassword={'Password'} userName={'User name'} buttonTitle={'Login'}/>*/}
        {<AlbumList/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,



  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Thirdproject', () => Thirdproject);
