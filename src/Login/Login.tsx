import React from 'react';
import { Button } from 'reactstrap';

interface LoginProps {
  login(): void
}

export const Login: React.FC<LoginProps> = (props) => {
  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <Button onClick={() => props.login()}>Login</Button>
    </div>
  );
};
