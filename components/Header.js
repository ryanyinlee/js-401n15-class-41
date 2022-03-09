import React from 'react';
import {StatusBar, Box, HStack, IconButton, Icon, Text, Center } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

function AppBar() {
  return <>
    <StatusBar bg="#3700B3" barStyle="light-content" />
    <Box safeAreaTop bg="#6200ee" />
    <HStack bg="#6200ee" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
      <HStack alignItems="center">
        <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
        <Text color="white" fontSize="20" fontWeight="bold">
          Home
        </Text>
      </HStack>
      <HStack>
        <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
        <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
        <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
      </HStack>
    </HStack>
  </>;
}

export default function Header() {
  return (
    <Center>
      <AppBar />
    </Center>
  );
}