import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Nav } from '../Nav/Nav';
import { Transactions } from '../Transactions/Transactions';

interface MainProps {
  logout(): void
}

export const Main: React.FC<MainProps> = (props) => {
  return (
    <BrowserRouter>
      <Nav logout={() => props.logout()} />
      <Route path="/" exact component={Transactions} />
    </BrowserRouter>
  );
};
