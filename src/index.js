import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './app/App';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

import { AmplifyProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// Context Provider
import { MaterialUIControllerProvider } from 'context';

import client from 'utils/apollo/apollo-client';

Amplify.configure({
  Auth: {
    region: awsExports.REGION,
    userPoolId: awsExports.USER_POOL_ID,
    userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID
  }
});

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
