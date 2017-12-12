'use stric'
import React, { Component } from 'react';
import {
  StyleSheet,Text,
  View,Image,TextInput,
  Button,Alert,TouchableHighlight,
  StatusBar,KeyboardAvoidingView,ScrollView,
} from 'react-native';
import { Card } from 'react-native-elements';
import BannerInPages from '../components/BannerInPages';
import ImageOverlay from '../components/ImageOverlay';
import MenuItem from '../components/MenuItem';
import Footer from '../components/Footer';
export default class Recetas extends React.Component{
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
      <ScrollView
        contentContainerStyle={{
          minHeight: 100,
          flexDirection: "column",
          alignItems: "stretch",
        }}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}>

          <View style={{flex: 0.5, backgroundColor: "#fff"}} >
          <Card title="Disfruta estos deliciosos Smoothies">
            <View style={styles.scrollContainer}>
              <View style={styles.menuContainer}>
                <MenuItem itemImage={require('../img/smoothie1.jpg')} />
                <MenuItem itemImage={require('../img/smoothie2.jpg')} />
                <MenuItem itemImage={require('../img/smoothie3.jpg')} />
                <MenuItem itemImage={require('../img/smoothie4.jpg')} />
                <MenuItem itemImage={require('../img/smoothie5.jpg')} />
              </View>
            </View>
          </Card>
          <Card title="Recetas de la Abuela Norma">
              <View style={styles.scrollContainer}>
                <View style={styles.menuContainer}>
                  <MenuItem itemImage={require('../img/norma1.jpg')} />
                  <MenuItem itemImage={require('../img/norma2.jpg')} />
                  <MenuItem itemImage={require('../img/norma3.jpg')} />
                  <MenuItem itemImage={require('../img/norma4.jpg')} />
                  <MenuItem itemImage={require('../img/norma5.jpg')} />
                  <MenuItem itemImage={require('../img/norma6.jpg')} />
                  <MenuItem itemImage={require('../img/norma7.jpg')} />
                  <MenuItem itemImage={require('../img/norma8.jpg')} />
                </View>
              </View>
            </Card>
              <Footer/>
          </View>
          
        </ScrollView>
    )
  }
}

//Estilos
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#451445',
    paddingVertical: 20,
  },
  scrollContainer: {
    backgroundColor: '#fff',
    alignItems:'center',
    width: '100%',
    justifyContent:'center',

  },
  menuContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
  },
  header: {
    fontSize:28,
    textAlign:'left',
    padding:10,
    color:'#FF0000'
  },
})

//Exportar el modulo
module.exports = Recetas;
