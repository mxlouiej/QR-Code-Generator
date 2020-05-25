import React, {useEffect, useState} from "react";
import QRCode from 'react-native-qrcode-svg'
import AsyncStorage from '@react-native-community/async-storage';

import { StyleSheet } from 'react-native'
import { 
  Container, 
  Content,
  Button,
  Text,
  Card
 } from 'native-base';

const ResultScreen = ({route, navigation}) => {
  const { plateNumber } = route.params;
  const { driverName } = route.params;
  const { dateTime } = route.params;
  const [info, setInfo] = useState({})

  useEffect(() => {
    console.log('enter here')
    const getUser = async () => {
      const data = await AsyncStorage.getItem('user')
      if (data) {
        setInfo({
          user: JSON.parse(data),
          plateNumber: plateNumber,
          driverName: driverName,
          dateAndTime: dateTime
        })
      } else {
        console.log('no user')
      }
    }

    getUser();
  }, [route])

 return (
   <Container style={styles.container}>
    <Content>
      <Text style={{marginBottom: 10}}>Present this QR Code to the checker upon arrival</Text>
      <Card>
        <QRCode value={JSON.stringify(info)} size={265} />
      </Card>

      <Button style={{borderRadius: 25, backgroundColor: '#191F44', marginTop: 25}} onPress={() => navigation.goBack()} >
        <Text>Back</Text>
      </Button>
      <Button style={{borderRadius: 25, backgroundColor: '#191F44', marginTop: 25}} onPress={() => AsyncStorage.clear()} >
        <Text>Clear</Text>
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

export default ResultScreen;