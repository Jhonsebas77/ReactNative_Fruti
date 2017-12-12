'use stric'
import React, { Component } from 'react';
import { SocialIcon } from 'react-native-elements';
import {
  StyleSheet,Text,
  View,Image,TextInput,
  Button,Alert,ScrollView,
  StatusBar,FlatList,KeyboardAvoidingView,
  TouchableOpacity,Linking
} from 'react-native';
import MenuItem from './MenuItem';

export default class SocialButton extends React.Component{
  constructor(props){
      super(props);
  }

  static navigationOptions = ({ navigation }) => ({
     title: ` ${navigation.state.params.user}`,
     headerTintColor: 'green',
   });
   handleClick = () => {
     Linking.openURL(this.props.url).catch(err => console.error("An error occurred", err));
   };
   render() {
     return <SocialIcon type={this.props.type} url={this.props.url} onPress={this.handleClick} />;
   }
}

//Estilos
const styles = StyleSheet.create({

})

//Exportar el modulo
module.exports = SocialButton;
