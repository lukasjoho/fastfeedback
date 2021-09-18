import Head from 'next/head';
import Image from 'next/image';
import { useAuth } from '@/lib/auth';
import { Button } from '@chakra-ui/button';
import { Heading } from '@chakra-ui/layout';
import { Flex, Icon, Stack } from '@chakra-ui/react';
import { GithubIcon, GoogleIcon, LogoIcon } from 'Icons';
import EmptyState from '@/components/EmptyState';
export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
      >
        <Head>
          <title>Fast Feedback</title>
        </Head>
        <LogoIcon boxSize="64px" color="black" />
        <div>{auth?.user?.email}</div>
        {auth?.user ? (
          <>
            <Button onClick={(e) => auth.signout()}>View Dashboard</Button>
          </>
        ) : (
          <Stack>
            <Button
              leftIcon={<GithubIcon />}
              mt={4}
              size="sm"
              onClick={(e) => auth.signInWithGithub()}
            >
              Sign In With Github
            </Button>
            <Button
              leftIcon={<GoogleIcon />}
              mt={4}
              size="sm"
              onClick={(e) => auth.signInWithGoogle()}
            >
              Sign In With Google
            </Button>
          </Stack>
        )}
      </Flex>
    </div>
  );
}
