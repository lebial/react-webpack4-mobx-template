import InventoryStore from './inventory/InventoryStore';
import CartStore from './cart/CartStore';
import {action} from 'mobx';

class BaseStore {
  inventoryStore = new InventoryStore(this);
  cartStore = new CartStore(this);

  addToCart = (name, quantity) => {
    this.inventoryStore.removeFromInventory(name, quantity);
    this.cartStore.addToCart(name, quantity);
  };

  remove = (name, quantity) => {
    this.cartStore.removeFromCart(name, quantity);
    this.inventoryStore.addToInventory(name, quantity);
  };
}

export default BaseStore;
