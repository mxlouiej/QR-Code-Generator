/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import {StyleSheet} from 'react-native'
import { 
  Root,
  Container, 
  Header, 
  Left,
  Body,
  Footer,
  Text,
  Title } from 'native-base';

import RegisterScreen from './screens/RegisterScreen'
import ResultScreen from './screens/ResultScreen'
import DriveScreen from './screens/DriveScreen'

const App = () => {
  const Stack = createStackNavigator();
  const [existing, setExisting] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const data = await AsyncStorage.getItem('user')
      if (data) {
        console.log('from app',JSON.parse(data))
        setExisting(true)
      }
    }

    getUser();
  }, [])

  return (
    <Root>
      <NavigationContainer>
        <Container>
          <Header style={styles.header}>
            <Left/>
            <Body>
              <Title>QR Code Generator</Title>
            </Body>
          </Header>
          
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            {!existing && (
              <>
                <Stack.Screen name="Register" component={RegisterScreen} />
              </>
            )}
              <Stack.Screen name="Drive" component={DriveScreen} />
              <Stack.Screen name="Result" component={ResultScreen} />
          </Stack.Navigator>
          <Footer style={styles.footer}>
            <Text style={styles.footerText}>{'\u00A9'} Louise Jacinto</Text>
            <Text style={styles.footerText}>mn.louisejacinto{'\u0040'}gmail.com</Text>
          </Footer>
        </Container>
      </NavigationContainer>
    </Root>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#191F44'
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  footerText: {
    color: 'grey',
    fontSize: 11
  }
})

export default App;
