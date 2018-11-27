
import React, {Component, Fragment} from 'react';
import {observer, inject} from 'mobx-react';
import ItemList from '../ItemList/ItemList';
import Item from '../ItemList/item/item';

@inject('store')
@observer
class Cart extends Component {
  render() {
    const {cart} = this.props.store.cartStore;
    const { remove } = this.props.store;
    const cartItems = cart.map((item, idx) => (
      <Item
        key={idx}
        removeItem={ remove }
        name={item.name}
        quantity={item.quantity}
        value="remove from cart"
      />
    ));

    return (
      <Fragment>
        <ItemList>{cartItems}</ItemList>
      </Fragment>
    );
  }
}

export default Cart;
