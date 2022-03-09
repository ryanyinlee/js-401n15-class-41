import { Box, Flex, Text, Button } from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ contact, call }) {
  return (
    <Box alignItems="center">
      <Flex justifyContent="space-between" direction="row" w="100%" h="58" p="4" >
        <Text>{contact.name}</Text>
        {/* <Divider bg="emerald.500" thickness="2" mx="2" orientation="vertical" /> */}
        <Button onPress={() => call(contact)}>Call</Button>
      </Flex>
    </Box>
  );
}

ListItem.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
  call: PropTypes.func,
};

export default ListItem;