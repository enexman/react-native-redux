import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store'
import Container from './components/Container'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
