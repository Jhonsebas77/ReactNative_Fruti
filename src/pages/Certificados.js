'use stric'
import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {StyleSheet,WebView,} from 'react-native';

export default class Certificados extends React.Component{
  constructor(props){
      super(props);
  }
  static navigationOptions = ({ navigation }) => ({
     title: ` ${navigation.state.params.user}`,
     headerTintColor: '#a8cf45',
   });

  render() {
     const { params } = this.props.navigation.state;
    return(
      <WebView style={styles.container}
        source={{uri: 'http://www.fruticoladecolombia.com/certificados/bajacerti.php'}}
      />
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:10,
    backgroundColor:"#000"
  },
})

module.exports = Certificados;
