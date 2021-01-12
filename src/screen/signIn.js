import React, {Component} from "react";
import { AppRegistry, Navigator,  ImageBackground,Image,StatusBar,Text, StyleSheet, View, TextInput, Button, Alert, Touchable, TouchableOpacity } from "react-native";
import {Item, Input, Label, Form} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const image = require('D:/Netflix/images/background.jpg');
const logo = require('D:/Netflix/images/logo.png');

const App = ({navigation}) => (
  <View style={styles.container}>
      <StatusBar hidden/>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.textHeader}>HELP</Text>
      </View>
      <View>
        <Text style={styles.title}>Sign In</Text>
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
                <Text style={styles.TextStyle}> Sign In </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',marginLeft:15,marginTop:10}}>
            <TouchableOpacity style={styles.buttonFb}>
              <Icon name="logo-facebook" size={30} color="white" style={{marginLeft:10,marginTop:9}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonGoogle}>
              <Icon2 name="google-plus" size={28} color="white" style={{marginLeft:8,marginTop:11}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonTwitter}>
              <Icon name="ios-logo-twitter" size={30} color="white" style={{marginLeft:12,marginTop:10}}/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.textBot}>Forgot your email or password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'row',alignSelf:'center'}} onPress = { () => navigation.navigate('SignUp')}>
            <Text style={{...styles.textBot, marginTop:5}}>New to Netflix?</Text>
            <Text style={{...styles.textBot, marginTop:5,fontFamily:'Roboto-Bold'}}> Sign Up Now.</Text>
          </TouchableOpacity>
      </View>
  </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:'#221F1F',
  },
  text:{
    color:"white",
  },
  header:{
    height:60,
    backgroundColor:'black',
    flexDirection:'row',
  },
  logo:{
    width:100,
    height:40,
    marginTop:10,
    marginLeft:10
  },
  textHeader:{
    color:'white',
    fontFamily:'Roboto-Bold',
    fontSize:18,
    marginLeft:200,
    marginTop:15,
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
  buttonFb:{
    backgroundColor:'#3B5998',
    marginLeft:40,
    marginTop:40,
    width:50,
    height:50,
    borderRadius:25,
  },
  buttonGoogle:{
    backgroundColor:'#D34836',
    marginLeft:40,
    marginTop:40,
    width:50,
    height:50,
    borderRadius:25,
  },
  buttonTwitter:{
    backgroundColor:'#00ACED',
    marginLeft:40,
    marginTop:40,
    width:50,
    height:50,
    borderRadius:25,
  },
  textBot:{
    fontFamily:'Roboto-Light',
    marginTop:50,
    color:'white',
    fontSize:14,
    alignSelf:'center',
  }
});

export default App;
