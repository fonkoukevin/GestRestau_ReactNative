import React from 'react'
import { VStack, Box, Divider, Image } from 'native-base';

export default function User({user}) {
    return (
        <Box border="1" borderRadius="md">
          <VStack space="4" divider={<Divider />}>
            <Box>
            <Image source={{
                
      uri: user.photo
    }} alt="Alternate Text" size="xl" />
            </Box>
            <Box px="4" pt="4">
              {user.name}
            </Box>
            <Box px="4">
              {user.description}
            </Box>
            <Box px="4" pb="4">
              {user.post}
            </Box>
          </VStack>
        </Box>
      );
}
