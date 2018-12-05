import React from 'react';
import {observer, inject} from 'mobx-react';
import './menu.scss';

const MenuButton = ({openModal, text, modal}) => {
  const activateModal = () => openModal(true, modal);
  return (
    <div className="menu__button" onClick={activateModal}>
      <span>{text}</span>
    </div>
  );
};

const Menu = inject('store')(
  observer(function({handleModal, cartCount}) {
    const {cartStore} = this.props.store;
    return (
      <div className="menu__body">
        <MenuButton
          openModal={handleModal}
          modal="AddToInventory"
          text="Add To Inventory"
        />
        <MenuButton openModal={handleModal} modal="Cart" text="Go To Cart" />
        <div className="menu__button">
          <p>Cart Items: {cartStore.cartItems}</p>
        </div>
      </div>
    );
  }),
);

export default Menu;
