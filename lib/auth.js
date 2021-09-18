import { createContext, useEffect, useState, useContext } from 'react';
import { createUser } from './db';
import firebase from './firebase';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  console.log('user', user);

  const handleUser = (rawUser) => {
    console.log(rawUser);
    if (rawUser) {
      const user = formatUser(rawUser);
      const { token, ...userWithoutToken } = user;
      console.log(user);
      createUser(user.uid, userWithoutToken);
      setUser(user);
      Cookies.set('fast-fastback-auth', true, { expires: 1 });
      return user;
    } else {
      setUser(false);
      Cookies.remove('fast-feedback-auth');
      return false;
    }
  };
  const signInWithGithub = () => {
    router.push('/dashboard');
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response.user);
      });
  };
  const signInWithGoogle = () => {
    router.push('/dashboard');

    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user);
      });
  };
  const signout = () => {
    router.push('/');

    return firebase
      .auth()
      .signOut()
      .then(() => {
        handleUser(false);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithGithub,
    signInWithGoogle,
    signout
  };
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user.xa,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL
  };
};
