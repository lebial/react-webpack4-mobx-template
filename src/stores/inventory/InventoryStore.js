import { observable, action } from 'mobx';
import { addItem, findItem, removeItem } from '../utilities/StoreUtilities';

class InventoryStore {
  constructor(BaseStore) {
    this.baseStore = BaseStore;
  }

  @observable inventory = [
    {
      name: 'test',
      quantity: 10,
      price: 5
    },
  ];

  @action.bound
  removeFromInventory = (name, quantity) => {
    const index = findItem(this.inventory, name);
    if (index !== -1) removeItem(this.inventory, index, quantity);
  };

  @action.bound
  addToInventory = (name, quantity) => {
    const index = findItem(this.inventory, name);
    addItem(this.inventory, name, index, quantity);
  };

}

export default InventoryStore;
