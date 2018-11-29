import React, {Fragment, Component} from 'react';
import ReactDOM from 'react-dom';
import {inject, observer, Provider} from 'mobx-react';
import BaseStore from './stores/BaseStore.js';

import Inventory from './components/inventory/inventory';
import Cart from './components/cart/cart';
import './index.scss';

@inject('store')
@observer
class Aap extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <p>Add To Inventory</p>
        </div>
        <Inventory />
        <h1>Cart</h1>
        <Cart />
      </Fragment>
    );
  }
}

ReactDOM.render(
  <Provider store={new BaseStore()}>
    <Aap />
  </Provider>,
  document.getElementById('app'),
);
