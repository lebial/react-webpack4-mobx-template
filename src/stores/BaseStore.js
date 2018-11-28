import InventoryStore from './inventory/InventoryStore';
import CartStore from './cart/CartStore';
import {action} from 'mobx';

class BaseStore {
  inventoryStore = new InventoryStore(this);
  cartStore = new CartStore(this);

  addToCart = (name, quantity, price) => {
    this.inventoryStore.removeFromInventory(name, quantity);
    this.cartStore.addToCart(name, quantity, price);
  };

  remove = (name, quantity, price) => {
    this.cartStore.removeFromCart(name, quantity);
    this.inventoryStore.addToInventory(name, quantity, price);
  };
}

export default BaseStore;
