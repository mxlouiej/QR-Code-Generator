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
  Text,
  View
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
    if(driverName === '' || plateNumber === '') {
      alert('All fields are required')
    } else {
      var date = month[today.getUTCMonth()]+ ' '+today.getDate()+ ', ' +today.getFullYear();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
      navigation.navigate("Result", {
        plateNumber: plateNumber,
        driverName: driverName,
        dateTime: date+' '+time
      })
    }
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
        <View style={{paddingHorizontal: 15}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Good day, {data.name}!</Text>
          <Text style={styles.sectionText} >Type in the information needed to generate your QR Code</Text>
        </View>
        <Form style={{marginTop: 10}}>
          <Item style={styles.formItem}>
            <Input autoCapitalize="words" placeholder="Driver Name" value={plateNumber} onChangeText={(text) => setPlateNumber(text)} />
          </Item>
          <Item style={styles.formItem}>
            <Input autoCapitalize="characters" placeholder="Plate Number" value={driverName} onChangeText={(text) => setDriveName(text)} />
          </Item>
          <Button style={styles.formButton} onPress={() => {
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
     display:'flex',
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 2,
    backgroundColor: 'white',
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
 })

 export default DriveScreen;