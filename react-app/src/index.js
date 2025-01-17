import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import Cart from './components/Cart'
import configureStore from './store';
import { ChakraProvider } from "@chakra-ui/react"

// const initialCart = []

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();

    // total: state.total


  window.localStorage.setItem('cart', JSON.stringify(state.cart));
  //subscribes to monitor state.cart and sets items into local storage
});


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
