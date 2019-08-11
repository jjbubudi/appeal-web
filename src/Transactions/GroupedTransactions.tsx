import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

export interface Transaction {
  readonly id: string
  readonly title: string
  readonly category: string
  readonly currency: string
  readonly amount: number
  readonly isLuxurious: boolean
}

export interface GroupedTransactionsProps {
  readonly title: string
  readonly transactions: Transaction[]
}

export const GroupedTransactions: React.FC<GroupedTransactionsProps> = (props) => {
  return (
    <div className="pt-3 pb-1">
      <h5>{props.title}</h5>
      <ListGroup>
        {
          props.transactions.map(transaction => (
            <ListGroupItem key={transaction.id}>
              <div className="d-flex w-100 justify-content-between">
                <h5>
                  {transaction.title}
                </h5>
                <span>{transaction.currency} {transaction.amount}</span>
              </div>
              <div className="d-flex w-100 justify-content-between">
                <span>{transaction.category}</span>
                {transaction.isLuxurious
                  ? <span><Badge color="danger">Luxury</Badge></span>
                  : <></>}
              </div>
            </ListGroupItem>
          ))
        }
      </ListGroup>
    </div>
  );
};
