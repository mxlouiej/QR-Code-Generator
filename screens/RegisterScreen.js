import React, {useState, useEffect} from "react";
import AsyncStorage from '@react-native-community/async-storage';

import { StyleSheet } from 'react-native'

import { 
  Container, 
  Content,
  Button,
  Form, 
  Item, 
  Input,
  Text,
  H2,
  View
 } from 'native-base';

const RegisterScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [empNumber, setEmpNumer] = useState('');
  const [company, setCompany] = useState('');
  let user = {
    name: firstName + ' ' + lastName,
    empNumber: empNumber,
    company: company,
   };

  const handleSubmit = async () => {
    if(firstName === '' || lastName === '' || empNumber === '' || company === '') {
      alert('All fields are required')
    } else {
      const arrData = user;
      await AsyncStorage.setItem('user', JSON.stringify(arrData))
      .then(() => {
        navigation.navigate("Drive")
      });
    }
  }

 return (
   <Container style={styles.container}>
    <Content>
      <View style={{paddingHorizontal: 15}}>
        <H2 style={{fontWeight: 'bold'}}>Welcome!</H2>
        <Text style={styles.sectionText} >Type in your information to be registered</Text>
      </View>
      <Form style={{marginTop: 10}}>
        <Item style={styles.formItem}>
          <Input autoCapitalize="words" placeholder="First Name" value={firstName} onChangeText={(text) => setFirstName(text)} />
        </Item>
        <Item style={styles.formItem}>
          <Input autoCapitalize="words" placeholder="Last Name" value={lastName} onChangeText={(text) => setLastName(text)} />
        </Item>
        <Item style={styles.formItem}>
          <Input placeholder="Employee Number" value={empNumber} onChangeText={(text) => setEmpNumer(text)} />
        </Item>
        <Item style={styles.formItem}>
          <Input autoCapitalize="words" placeholder="Company" value={company} onChangeText={(text) => setCompany(text)} />
        </Item>
        <Text style={{color: 'grey', fontSize: 13, paddingHorizontal: 15}}>
          Make sure that the information you have entered are correct before submitting
        </Text>
        <Button style={styles.formButton} onPress={() => {
          handleSubmit()
        }}>
          <Text>Register</Text>
        </Button>
      </Form>
    </Content>
   </Container>
 ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  formItem: {
    marginTop: 20,
    marginHorizontal: 15,
  },
  formButton: {
    justifyContent: 'center', 
    marginTop: 20, 
    backgroundColor: '#191F44', 
    borderRadius: 25,
    marginHorizontal: 15
  },
  sectionText: {
    color: '#353b5e'
  }
})

export default RegisterScreen;