import React, {Fragment, Component} from 'react';
import ReactDOM from 'react-dom';
import {inject, observer, Provider} from 'mobx-react';
import BaseStore from './stores/BaseStore.js';

import Inventory from './components/inventory/inventory';
import Cart from './components/cart/cart';
import Menu from './components/menu/menu';
import ModalSwitcher from './components/modal/modalSwitcher';
import Modal from './components/modal/modal';

import './scss/_variables.scss';
import './index.scss';

@inject('store')
@observer
class Aap extends Component {
  state = {
    openModal: false,
    activeModal: '',
  };

  handleModal = (openModal, activeModal = '') => {
    this.setState({openModal, activeModal});
  };

  render() {
    const {openModal, activeModal} = this.state;
    return (
      <Fragment>
        <ModalSwitcher
          currentModal={activeModal}
          handleModal={this.handleModal}
          openModal={openModal}
        />
        <div className="header__container">
          <Menu handleModal={this.handleModal} />
        </div>
        <Inventory openModal={openModal} />
      </Fragment>
    );
  }
}

ReactDOM.render(
  <Provider store={new BaseStore()}>
    <Aap />
  </Provider>,
  document.getElementById('app'),
);
