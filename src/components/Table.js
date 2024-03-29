
import React from 'react'
import { VStack, Box, Divider, Image } from 'native-base';

export default function Table({table}) {
    return (
        <Box border="1" borderRadius="md">
          <VStack space="4" divider={<Divider />}>
            <Box>
            <Image source={{
                
      uri: table.photo
    }} alt="Alternate Text" size="xl" />
            </Box>
            <Box px="4" pt="4">
              {table.numTable}
            </Box>
            <Box px="4">
              {table.placesNumbers}
            </Box>
            <Box px="4" pb="4">
              {table.shape}
            </Box>
            <Box px="4" pb="4">
              {table.position}
            </Box>
          </VStack>
        </Box>
      );
}
