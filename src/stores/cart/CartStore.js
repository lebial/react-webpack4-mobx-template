import { observable, action, computed } from 'mobx';
import { findItem, addItem, removeItem } from '../utilities/StoreUtilities';

class CartStore {
  constructor(BaseStore) {
    this.baseStore = BaseStore;
  }

  @observable cart = [];

  @action
    addToCart = (name, quantity, price) => {
    const index = findItem(this.cart, name);
    addItem(this.cart, name, index, quantity, price);
  }

  @action
  removeFromCart = (name, quantity) => {
    const index = findItem(this.cart, name);
    if (index !== -1) removeItem(this.cart, index, quantity);
  }

  @computed
  get cartTotal(){
    let count = 0;
    if(this.cart.length){
      for(let i = 0; i < this.cart.length; i++){
        count += (this.cart[i].price * this.cart[i].quantity)
      }
      return count;
    }
    else return 0;
  }

}

export default CartStore;
