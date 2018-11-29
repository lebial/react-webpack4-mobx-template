import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import FormInput from './formInput/FormInput';
import './form.scss';

@inject('store')
@observer
class AddInventoryForm extends Component {
  state = {
    productName: '',
    quantity: 0,
    price: 0,
  };

  handleChange = (e, option) => {
    this.setState({[option]: e.target.value});
  };

  handleSubmit = e => {
    const {addToInventory} = this.props.store.inventoryStore;
    const {productName, quantity, price} = this.state;
    e.preventDefault();
    if (quantity > 0) addToInventory(productName, quantity, price);
    this.setState({productName: '', quantity: 0, price: 0});
  };

  render() {
    const {addToInventory} = this.props.store.inventoryStore;
    const {productName, quantity, price} = this.state;
    return (
        <form className="addInventory__form" onSubmit={this.handleSubmit}>
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
          <label>Price</label>
          <FormInput
            type="text"
            name="price"
            value={price}
            handler={this.handleChange}
          />
          <FormInput type="submit" value="submit" />
        </form>
    );
  }
}

export default AddInventoryForm;
