import { useAuth } from '@/lib/auth';
import { Flex } from '@chakra-ui/layout';
import {
  Button,
  Icon,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/react';
import { LogoIcon } from 'Icons';
import React from 'react';
import AddSiteModal from './AddSiteModel';
import NextLink from 'next/link';

const DashboardShell = ({ children }) => {
  const auth = useAuth();
  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="white"
        alignItems="center"
        justifyContent="space-between"
        py={4}
        px={8}
      >
        <Stack isInline spacing={4} align="center ">
          <NextLink href="/" passHref>
            <LogoIcon />
          </NextLink>
          <NextLink href="/dashboard" passHref>
            <Link>Feedback</Link>
          </NextLink>
          <NextLink href="/feedback" passHref>
            <Link>Sites</Link>
          </NextLink>
        </Stack>
        <Flex alignItems="center">
          {auth.user && (
            <Button variant="ghost" mr={2} onClick={() => auth.signout()}>
              Log Out
            </Button>
          )}
          <Avatar size="sm" src={auth?.user?.photoURL} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height="100vh">
        <Flex maxWidth="800px" w="100%" direction="column" ml="auto" mr="auto">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default DashboardShell;
