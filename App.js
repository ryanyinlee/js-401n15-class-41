import React, { useEffect, useState } from 'react';
// all our "elements" in React Native need to come from 'react-native' or a third part library for react native.
import { Linking } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import * as Contacts from 'expo-contacts'; // there is no default export from expo-contacts
import ContactsList from './components/ContactsList';
import Footer from './components/Footer';
import Header from './components/Header';

// let read the contacts from our phone and make phone calls.
export default function App() {

  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    // define an async function and call it immediatly
    const getContacts = async () => {
      // ask for permission
      let { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        let contactList = await Contacts.getContactsAsync();
        setContacts(contactList.data);
      }
    };

    getContacts();

  }, []);

  const call = (contact) => {
    const phoneNumber = contact.phoneNumbers[0].number; // extract number from a contact
    const link = `tel:${phoneNumber}`; // create our Linking URL
    Linking.canOpenURL(link) // ask phone if we can use this linking feature
      .then(() => Linking.openURL(link)) // if so open the url
      .catch(console.error); // or log an error
  };

  return (
    <NativeBaseProvider>
      <Box flex={1}>
        <Header />
        <ContactsList
          contacts={contacts}
          call={call}
        />
        <Footer />
      </Box>
    </NativeBaseProvider>
  );
}
