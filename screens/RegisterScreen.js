import React, {useState} from "react";

import { StyleSheet } from 'react-native'

import { 
  Container, 
  Content,
  Button,
  Form, 
  Item, 
  Input,
  Text
 } from 'native-base';

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [empNumber, setEmpNumer] = useState('');
  const [company, setCompany] = useState('');
  
 return (
   <Container>
    <Content>
      <Form style={styles.regForm}>
        <Item>
          <Input placeholder="First Name" value={firstName} onChangeText={(text) => setFirstName(text)} />
        </Item>
        <Item>
          <Input placeholder="Last Name" value={lastName} onChangeText={(text) => setLastName(text)} />
        </Item>
        <Item>
          <Input placeholder="Employee Number" value={empNumber} onChangeText={(text) => setEmpNumer(text)} />
        </Item>
        <Item last>
          <Input placeholder="Company Name" value={company} onChangeText={(text) => setCompany(text)} />
        </Item>
        <Button onPress={() => 
          console.log(firstName, lastName, empNumber, company)
        }>
          <Text>Submit</Text>
        </Button>
      </Form>
    </Content>
   </Container>
 ) 
}

const styles = StyleSheet.create({
  regForm: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default RegisterScreen;