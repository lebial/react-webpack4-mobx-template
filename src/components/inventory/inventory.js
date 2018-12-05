import React, {Component, Fragment} from 'react';
import {observer, inject} from 'mobx-react';
import ItemList from '../ItemList/ItemList';
import Item from '../ItemList/item/item';
import './inventory.scss';

@inject('store')
@observer
class Inventory extends Component {
  render() {
    const {inventory} = this.props.store.inventoryStore;
    const {addToCart} = this.props.store;
    const {openModal} = this.props;

    const inventoryItems = inventory.map((item, idx) => (
      <Item
        key={idx}
        removeItem={addToCart}
        name={item.name}
        quantity={item.quantity}
        price={item.price}
        value="add to cart"
        modalOpen={openModal}
      />
    ));

    return (
      <Fragment>
        <div className="inventory__container">
          <div className="inventory__title">
            <p>Inventory</p>
          </div>
          <ItemList>{inventoryItems}</ItemList>
        </div>
      </Fragment>
    );
  }
}

export default Inventory;
