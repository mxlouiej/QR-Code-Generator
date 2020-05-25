import React, { useState, useEffect } from "react"
import AsyncStorage from '@react-native-community/async-storage';

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

 const DriveScreen = ({ navigation }) => {
  const [data, setData] = useState({});
  const [plateNumber, setPlateNumber] = useState('');
  const [driverName, setDriveName] = useState('');
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

  const handleSubmit = () => {
    var date = month[today.getUTCMonth()]+ ' '+today.getDate()+ ', ' +today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    navigation.navigate("Result", {
      plateNumber: plateNumber,
      driverName: driverName,
      dateTime: date+' '+time
    })
  }

  useEffect(() => {
    const getUser = async () => {
      const value = await AsyncStorage.getItem('user')
      if (value) {
        setData(JSON.parse(value))
      }
    }

    getUser();
  }, [])

   return (
     <Container style={styles.container}>
       <Content>
         <Text>Good day, {data.name}!</Text>
        <Form style={{marginTop: 10}}>
          <Item style={styles.formItem}>
            <Input placeholder="Driver Name" value={plateNumber} onChangeText={(text) => setPlateNumber(text)} />
          </Item>
          <Item style={styles.formItem}>
            <Input placeholder="Plate Number" value={driverName} onChangeText={(text) => setDriveName(text)} />
          </Item>
          <Button style={{justifyContent: 'center', marginTop: 20, backgroundColor: '#191F44', borderRadius: 25}} onPress={() => {
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
   container: {
    // flex: 1,
    // paddingHorizontal: 45,
    // paddingVertical: 30,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
   },
   formItem: {
    paddingTop: 10
   }
 })

 export default DriveScreen;