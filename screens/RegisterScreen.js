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
  H2
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
      <H2 style={{fontWeight: 'bold'}}>Welcome!</H2>
      <Text >Type in your information to be registered</Text>
      <Form style={{marginTop: 10}}>
        <Item style={styles.formItem}>
          <Input placeholder="First Name" value={firstName} onChangeText={(text) => setFirstName(text)} />
        </Item>
        <Item style={styles.formItem}>
          <Input placeholder="Last Name" value={lastName} onChangeText={(text) => setLastName(text)} />
        </Item>
        <Item style={styles.formItem}>
          <Input placeholder="Employee Number" value={empNumber} onChangeText={(text) => setEmpNumer(text)} />
        </Item>
        <Item style={styles.formItem} last>
          <Input placeholder="Company" value={company} onChangeText={(text) => setCompany(text)} />
        </Item>
        <Button style={{justifyContent: 'center', marginTop: 20, backgroundColor: '#191F44', borderRadius: 25}} onPress={() => {
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
    width: '100%',
    paddingVertical: 50,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  formItem: {
    marginTop: 10,
    paddingHorizontal: 5
    // backgroundColor: 'white'
  }
})

export default RegisterScreen;