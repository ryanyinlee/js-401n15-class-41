import React from 'react';
import { FlatList } from 'react-native';
import { Box } from 'native-base';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const ContactsList = ({ contacts, call }) => {
  return (
    <Box>
      <FlatList
        data={contacts}
        keyExtractor={contact => contact.id}
        renderItem={({ item }) => {
          return <ListItem contact={item} call={call} />;
        }}
      />
    </Box>
  );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
    call: PropTypes.func,
  };
  
  export default ContactsList;
