import React, {useEffect, useState} from "react";
// import QRCode from 'react-native-qrcode-svg'

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

const HomeScreen = ({route, navigation}) => {
  const { firstName } = route.params;
  const { lastName } = route.params;
  const { empNumber } = route.params;
  const { company } = route.params;
  const { plateNumber } = route.params;
  const { dateTime } = route.params;
  const [info, setInfo] = useState({})

  useEffect(() => {
    // console.log(firstName)
    setInfo({ 
      name: firstName + " " + lastName,
      employeeNumber: empNumber,
      company: company,
      plateNumber: plateNumber,
      dateAndTime: dateTime
    })
  }, [route])

 return (
   <Container style={styles.body}>
    <Content>
      {console.log(info)}
      <Text>Hello {firstName} {lastName}</Text>
      <Text>Employee Number: {JSON.stringify(empNumber).replace(/\"/g, "")}</Text>
      <Text>Company: {JSON.stringify(company).replace(/\"/g, "")}</Text>
      <Text>Plate Number: {plateNumber}</Text>
      {/* <QRCode value={info} /> */}
    </Content>
   </Container>
 ) 
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default HomeScreen;