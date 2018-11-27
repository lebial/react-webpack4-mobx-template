import { observable, action, computed } from 'mobx';
import { findItem, addItem, removeItem } from '../utilities/StoreUtilities';

class CartStore {
  constructor(BaseStore) {
    this.baseStore = BaseStore;
  }

  @observable cart = [];

  @action
  addToCart= (name, quantity) => {
    const index = findItem(this.cart, name);
    addItem(this.cart, name, index, quantity);
  }

  @action
  removeFromCart = (name, quantity) => {
    const index = findItem(this.cart, name);
    if (index !== -1) removeItem(this.cart, index, quantity);
  }

}

export default CartStore;
