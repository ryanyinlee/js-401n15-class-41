import  { useState, useEffect, React }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Linking } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {

  let [contacts, setContacts] = useState([]);
  
  useEffect(()=> {

    // define an async function and call it immediately.
    const getContacts = async() => {
      // ask for permission
      let { status } = await Contacts.requestPermissionsAsync();
      console.log(status);
      if (status === 'granted'){
        let contactList = await Contacts.getContactsAsync();
        console.log(contactList);
        setContacts(contactList.data);
      }
    }

    getContacts();
  }, []);

  const call = (contact) => {
    const phoneNumber = contact.phoneNumbers[0].number;
    const link = `tel:${phoneNumber}`
    Linking.canOpenURL;
  }

  return (
    <View style={styles.container}>
      <FlatList
      data={contacts}
      keyExtractor={contact => contact.id}
      renderItem={( { item } )=> {
        return (<Button title={item.name} onPress={console.log(item)} />)
      }}      
      />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
