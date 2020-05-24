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
  Container, 
  Header, 
  Body,
  Title } from 'native-base';

import RegisterScreen from './screens/RegisterScreen'

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Container>
        <Header>
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
        </Stack.Navigator>
      </Container>
    </NavigationContainer>
  );
};

export default App;
