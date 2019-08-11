import React from 'react';
import ReactDOM from 'react-dom';
import { GroupedTransactions } from './GroupedTransactions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GroupedTransactions title="" transactions={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
