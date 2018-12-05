import React from 'react';

import Modal from './modal';
import Cart from '../cart/cart';
import AddInventoryForm from '../AddInventoryForm/form';

function ModalSwitcher({currentModal, handleModal, openModal}) {
  switch (currentModal) {
    case 'AddToInventory':
      return (
        openModal && (
          <Modal handleModal={handleModal} title="Add To Inventory">
            <AddInventoryForm />
          </Modal>
        )
      );
      break;
    case 'Cart':
      return (
        openModal && (
          <Modal handleModal={handleModal} title="Cart">
            <Cart />
          </Modal>
        )
      );
      break;
    default:
      return null;
  }
}

export default ModalSwitcher;
