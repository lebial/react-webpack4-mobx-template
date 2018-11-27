import React, {Component} from 'react';
import {inject, observer, Provider} from 'mobx-react';
import ReactDOM from 'react-dom';
import BaseStore from './stores/BaseStore.js';
import Inventory from './components/inventory/inventory';
import Cart from './components/cart/cart';

@inject('store')
@observer
class Aap extends Component {
  render() {
    return (
      <div>
        <h1>Inventory</h1>
        <Inventory />
        <h1>Cart</h1>
        <Cart />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={new BaseStore()}>
    <Aap />
  </Provider>,
  document.getElementById('app'),
);
