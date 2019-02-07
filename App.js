
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation'

import LoginScreen from './src/loginScreen'
import HomeScreen from './src/homeScreen'

export default class App extends Component {
  render() {
    return (
        <Stack/>   
    );
  }
}

const Stack = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen
  
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
