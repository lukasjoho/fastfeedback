import React from 'react';
import { Heading, Box, Text, Button, Flex } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';
import AddSiteModal from './AddSiteModel';

const EmptyState = () => {
  return (
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius="8px"
      p={8}
      justify="center"
      align="center"
      direction="column "
    >
      <Heading size="md" mb={4}>
        You havent added any sites
      </Heading>
      <Text mb={4}>Welcome lets get started!</Text>
      <AddSiteModal />
    </Flex>
  );
};
export default EmptyState;
