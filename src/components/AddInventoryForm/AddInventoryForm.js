import React, { Component, Fragment } from 'react';
import { inject } from 'mobx-react';

@inject(store => {inventoryStore: store.inventoryStore})
class AddInventoryForm extends Component {
  state = {
    name: '',
    quantity: 0
  }

  addToInventory = this.props.inventoryStore.addToInventory;

  render(){
    return(
      <Fragment>
        <form>
          
        </form>
      </Fragment>
    );
  };
}

export default AddInventoryForm;
