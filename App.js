import 'react-native-gesture-handler';
import * as React from "react";
import { AppRegistry, Navigator,  ImageBackground,Image,StatusBar,Text, StyleSheet, View, TextInput, Button, Alert, Touchable, TouchableOpacity } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from './src/screen/signIn';
import SignUpScreen from './src/screen/signUp';

const image = require('D:/Netflix/images/background.jpg');
const logo = require('D:/Netflix/images/logo.png');

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return(
    <View style={styles.container}>
      <StatusBar hidden/>
    <ImageBackground source={image} style={styles.image}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.text}>LET'S GET STARTED</Text>
      <View style={styles.MainContainer}>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.TextStyle}> Sign In </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.MainContainer}>
        <TouchableOpacity
          style={styles.SubmitButtonStyle2}
          activeOpacity = { .5 }
          onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.TextStyle}> Sign Up </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    </View>
  );
}

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  logo:{
    width:200,
    height:60,
    justifyContent: "center",
    alignSelf: "center",
    marginTop:150,
    marginBottom:10,
  },
  text:{
    color:"white",
    fontFamily: "Roboto-Light",
    fontSize:17,
    textAlign: "center",
    letterSpacing: 5,
  },
  SubmitButtonStyle: {
    width: 200,
    height: 43,
    marginTop:120,
    marginBottom: -10,
    paddingTop:7,
    paddingBottom:6,
    marginHorizontal: 80,
    backgroundColor:'#D71617',
    borderRadius:25,
    borderWidth: 1,
    borderColor: "transparent"
  },
  SubmitButtonStyle2: {
    width: 200,
    height: 43,
    marginTop:30,
    marginBottom: -10,
    paddingTop:7,
    paddingBottom:6,
    marginHorizontal: 80,
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
  }
});

export default App;
