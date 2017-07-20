// import library
import React, {Component} from 'react';
import {Text, View, ListView} from 'react-native';
import axios from 'axios';


class AlbumList extends Component{
  state = {albums: [], isLoading: true};

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({albums: response.data, isLoading: false}));

  }

  renderAlbums(){


    return this.state.albums.map(album => <Text>{album.title}</Text>);
  }


  render(){
    console.log(this.state);
    if(this.state.isLoading==true) return(
      <Text>Loading...</Text>
    );

    if(this.state.isLoading==false)  return (
      <View>
      {renderAlbums()}
      </View>
      );
  }
}

export default AlbumList;
