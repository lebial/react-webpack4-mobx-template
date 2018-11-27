import React, {Component, Fragment} from 'react';
import {inject, observer} from 'mobx-react';

import FormInput from './formInput/FormInput';

@inject('store')
@observer
class AddInventoryForm extends Component {
  state = {
    productName: '',
    quantity: 0,
  };

  handleChange = (e, option) => {
    this.setState({[option]: e.target.value});
  };

  handleSubmit = e => {
    const {addToInventory} = this.props.store.inventoryStore;
    const {productName, quantity} = this.state;
    e.preventDefault();
    if (quantity > 0) addToInventory(productName, quantity);
    this.setState({productName: '', quantity: 0});
  };

  render() {
    const {addToInventory} = this.props.store.inventoryStore;
    const {productName, quantity} = this.state;
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>Product Name</label>
          <FormInput
            type="text"
            name="productName"
            value={productName}
            handler={this.handleChange}
          />
          <label>Quantity</label>
          <FormInput
            type="text"
            name="quantity"
            value={quantity}
            handler={this.handleChange}
          />
          <FormInput type="submit" value="submit" handler={this.handleChange} />
        </form>
      </Fragment>
    );
  }
}

export default AddInventoryForm;
