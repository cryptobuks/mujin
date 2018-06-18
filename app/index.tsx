import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ApolloClient  from 'apollo-boost'
import Root from './containers/Root';
import './app.global.scss';

const { configureStore, history } = require('./store/configureStore');
const store = configureStore();

const client = new ApolloClient({uri: "https://api.github.com/graphql"})

render(
  <AppContainer>
    <Root client={client} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if ((module as any).hot) {
  (module as any).hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
