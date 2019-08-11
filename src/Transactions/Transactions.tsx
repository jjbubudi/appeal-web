import React from 'react';
import { GroupedTransactions, Transaction } from './GroupedTransactions';
import { Container } from 'reactstrap';

export const Transactions: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: "1",
      title: "Uber",
      category: "Transportation",
      currency: "HKD",
      amount: 500,
      isLuxurious: true
    },
    {
      id: "2",
      title: "Deliveroo",
      category: "Food and Beverage",
      currency: "HKD",
      amount: 128,
      isLuxurious: false
    }
  ];
  return (
    <Container>
      <GroupedTransactions title="Today" transactions={transactions}/>
      <GroupedTransactions title="Today" transactions={transactions}/>
      <GroupedTransactions title="Today" transactions={transactions}/>
      <GroupedTransactions title="Today" transactions={transactions}/>
    </Container>
  );
};
