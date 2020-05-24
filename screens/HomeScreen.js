import React, {useEffect, useState} from "react";
import QRCode from 'react-native-qrcode-svg'

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
    const mount = async () => {
      setInfo({ 
        name: firstName + " " + lastName,
        employeeNumber: empNumber,
        company: company,
        plateNumber: plateNumber,
        dateAndTime: dateTime
      })
    }
    mount();
  }, [route])

 return (
   <Container style={styles.body}>
    <Content>
      <QRCode value={JSON.stringify(info)} size={250} />

      <Text>Present this QR Code to the checker upon arrival</Text>
      <Button onPress={() => navigation.goBack()} >
        <Text>Back</Text>
      </Button>
    </Content>
   </Container>
 ) 
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default HomeScreen;