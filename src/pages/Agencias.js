'use stric'
import React, { Component } from 'react';
import {
  StyleSheet,Text,
  View,Image,ScrollView,
} from 'react-native';
import { Card } from 'react-native-elements';
import BannerInPages from '../components/BannerInPages';
import ImageOverlay from '../components/ImageOverlay';
import Footer from '../components/Footer';
export default class Agencias extends React.Component{
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
      <ScrollView style={styles.container}>
        <Card title="Nuestras Agencias en Colombia">
            <Image source= {require('../img/Mapa.jpg') } resizeMode="cover" style={styles.containerImage}/>
        </Card>
        <Footer/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
    container: {
    flex: 1,
  },
    header: {
    fontSize:28,
    textAlign:'left',
    padding:10,
    color:'#FF0000',
    backgroundColor:'#fff'
  },

})

module.exports = Agencias;
