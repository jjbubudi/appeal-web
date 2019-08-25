import React from 'react';
import { useAuth } from '../Auth/Auth';
import { Login } from '../Login/Login';
import { Main } from '../Main/Main';
import { Loading } from './Loading';

export const App: React.FC = () => {
  const auth = useAuth()
  switch (auth.type) {
    case "Authenticated":
      return <Main logout={() => auth.logout()} />;
    case "Unauthenticated":
      return <Login login={() => auth.login()}/>;
    case "Loading":
      return <Loading />;
  }
};
