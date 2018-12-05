import {observable, action, computed} from 'mobx';
import {
  findItem,
  addItem,
  removeItem,
  calculateTotal,
} from '../utilities/StoreUtilities';

class CartStore {
  constructor(BaseStore) {
    this.baseStore = BaseStore;
  }

  @observable cart = [];

  @action
  addToCart = (name, quantity, price) => {
    const index = findItem(this.cart, name);
    addItem(this.cart, name, index, quantity, price);
  };

  @action
  removeFromCart = (name, quantity) => {
    const index = findItem(this.cart, name);
    if (index !== -1) removeItem(this.cart, index, quantity);
  };

  @computed
  get cartTotal() {
    return calculateTotal(this.cart);
  }

  @computed
  get cartItems() {
    return calculateTotal(this.cart, false);
  }
}

export default CartStore;
