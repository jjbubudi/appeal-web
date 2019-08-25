import React from 'react';
import { render } from 'react-dom';
import { App } from './App/App';
import { AuthProvider } from './Auth/Auth';
import { unregister } from './serviceWorker';
import './theme.css';

render(
  <AuthProvider options={{
    domain: process.env.REACT_APP_AUTH0_DOMAIN!,
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID!,
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    redirect_uri: window.location.origin}}>
    <App />
  </AuthProvider>,
  document.getElementById('root'));

unregister();
