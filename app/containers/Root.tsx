import * as React from 'react';

import Routes from '../routes';
import { ApolloProvider } from 'react-apollo';

interface IRootType {
  client: any
};

export default function Root({ client }: IRootType) {
  return (<ApolloProvider client={client}>
        <Routes />
    </ApolloProvider>)
}
