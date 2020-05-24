import React, {useState, useEffect} from "react";

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

const RegisterScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [empNumber, setEmpNumer] = useState('');
  const [company, setCompany] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const today = new Date()

  var month = new Array(12);
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  useEffect(() => {
    
    // var currentMonth = month[today.getUTCMonth()];
    // var currentYear = today.getUTCFullYear();
    // var currentHour = today.getUTCHours()
    // var currentMinute = today.getUTCMinutes()
    // console.log(currentMonth, currentDay, currentYear, currentHour, currentMinute)
    console.log('mount')
  }, [])

  const handleSubmit = async () => {  
    var date = month[today.getUTCMonth()]+ ' '+today.getDate()+ ', ' +today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    navigation.navigate('Home', {
      firstName: firstName,
      lastName: lastName,
      empNumber: empNumber,
      company: company,
      plateNumber: plateNumber,
      dateTime: date+' '+time
    })
  }

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
        <Item>
          <Input placeholder="Company Name" value={company} onChangeText={(text) => setCompany(text)} />
        </Item>
        <Item last>
          <Input placeholder="Plate Number" value={plateNumber} onChangeText={(text) => setPlateNumber(text)} />
        </Item>
        <Button onPress={() => {
          handleSubmit()
        }}>
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