import React, {Component} from "react";
import { AppRegistry, Navigator,  ImageBackground,Image,StatusBar,Text, StyleSheet, View, TextInput, Button, Alert, Touchable, TouchableOpacity } from "react-native";
import {Item, Input, Label, Form} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const image = require('D:/Netflix/images/background2.jpg');
const logo = require('D:/Netflix/images/logo.png');

const App = ({navigation}) => (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <StatusBar hidden/>
      <View style={styles.header}>
          <Icon name="ios-arrow-back-sharp" size={30} color="black" style={{marginLeft:10,marginTop:15,marginRight:0}}/>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.textHeader}>SIGN IN</Text>
        <Text style={{...styles.textHeader,marginLeft:20}}>HELP</Text>
      </View>
      <View>
        <Text style={styles.textTop}>See what's Next.</Text>
        <Text style={styles.textTop2}>WATCH ANYWHERE. CANCEL AT ANY TIME.</Text>
        <Text style={styles.title}>Sign Up</Text>
        <Form style={styles.form}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <View style={styles.MainContainer}>
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity = { .5 }>
                <Text style={styles.TextStyle}> Sign Up </Text>
            </TouchableOpacity>
          </View>
      </View>
    </ImageBackground>
  </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex:1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text:{
    color:"white",
  },
  header:{
    marginTop:-190,
    height:60,
    backgroundColor:'white',
    flexDirection:'row',
  },
  logo:{
    width:100,
    height:40,
    marginTop:10,
    marginLeft:0
  },
  textHeader:{
    color:'black',
    fontFamily:'Roboto-Bold',
    fontSize:18,
    marginLeft:90,
    marginTop:20,
  },
  title:{
    fontFamily:'Rams W01 Bold',
    color:'white',
    fontSize:25,
    marginTop:25,
    marginLeft:15,
  },
  form:{
    marginTop:15,
    marginLeft:10,
    width:'90%',
  },
  SubmitButtonStyle: {
    width: '90%',
    height: 43,
    marginTop:60,
    marginBottom: -10,
    paddingTop:7,
    paddingBottom:6,
    marginHorizontal: 10,
    backgroundColor:'#D71617',
    borderRadius:25,
    borderWidth: 1,
    borderColor: "transparent"
  },
  TextStyle:{
    fontFamily: "Roboto-Light",
    fontSize: 21,
    color:'#fff',
    textAlign:'center',
  },
  textTop:{
    fontFamily:'Roboto-Bold',
    marginTop:50,
    color:'white',
    fontSize:30,
    alignSelf:'center',
  },
  textTop2:{
    fontFamily:'Roboto-Light',
    marginTop:10,
    color:'white',
    fontSize:15,
    alignSelf:'center',
  },
});

export default App;
