import React from 'react';
import { Nav } from '../Nav/Nav';
import { Summary } from '../Summary/Summary';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Transactions } from '../Transactions/Transactions';

export const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Route path="/" exact component={Summary} />
      <Route path="/transactions/" component={Transactions} />
    </Router>
  );
};
