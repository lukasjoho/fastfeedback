import React from 'react';
import { Heading, Box, Text, Button } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => {
  return (
    <DashboardShell>
      <Box width="100%" backgroundColor="white" border>
        <Heading size="md">Get feedback on your site</Heading>
        <Text>Start today, then grow with us.</Text>
        <Button>Upgrade to Starter</Button>
      </Box>
      {children}
    </DashboardShell>
  );
};
export default FreePlanEmptyState;
