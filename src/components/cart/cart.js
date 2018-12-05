import React, {Component, Fragment} from 'react';
import {observer, inject} from 'mobx-react';
import ItemList from '../ItemList/ItemList';
import Item from '../ItemList/item/item';
import './cart.scss';

const CartItem = ({name, price, quantity, removeItem}) => {
  const remove = () => removeItem(name, 1, price);
  return (
    <div className="cart-item__container">
      <div className="cart-item__details">
        <p>Name: {name}</p>
        <p>Quantity: {quantity}</p>
        <p>Price: {price}</p>
      </div>
      <div className="cart-item__button--remove" onClick={remove}>
        <p>Remove Item</p>
      </div>
    </div>
  );
};

@inject('store')
@observer
class Cart extends Component {
  render() {
    const {cart, cartTotal} = this.props.store.cartStore;
    const {remove} = this.props.store;
    const cartItems = cart.map((item, idx) => (
      <CartItem
        key={idx}
        removeItem={remove}
        name={item.name}
        quantity={item.quantity}
        price={item.price}
      />
    ));

    return (
      <Fragment>
        <div className="cart__total">
          <p>Your total is: {cartTotal}</p>
        </div>
        {cartItems}
      </Fragment>
    );
  }
}

export default Cart;
