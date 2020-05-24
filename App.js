/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { 
  Root,
  Container, 
  Header, 
  Left,
  Body,
  Title } from 'native-base';

import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  const Stack = createStackNavigator();
  return (
    <Root>
      <NavigationContainer>
        <Container>
          <Header>
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
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </Container>
      </NavigationContainer>
    </Root>
  );
};

export default App;
