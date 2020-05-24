import React, {useEffect, useState} from "react";
import QRCode from 'react-native-qrcode-svg'

import { StyleSheet } from 'react-native'
import { 
  Container, 
  Content,
  Button,
  Text,
  Card,
  Icon
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
   <Container style={styles.container}>
    <Content>
      <Text style={{marginBottom: 10}}>Present this QR Code to the checker upon arrival</Text>

      <Card>
        <QRCode value={JSON.stringify(info)} size={265} />
      </Card>

      <Button style={{borderRadius: 25, backgroundColor: '#191F44', marginTop: 25}} onPress={() => navigation.goBack()} >
        <Icon name='arrow-back' />
        <Text>Back</Text>
      </Button>
    </Content>
   </Container>
 ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 45,
    paddingVertical: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default HomeScreen;