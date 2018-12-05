import React from 'react';
import {observer} from 'mobx-react';

import './item.scss';

const Item = observer(
  ({
    name,
    description,
    quantity,
    removeItem,
    index,
    price,
    value,
    modalOpen,
    cart,
  }) => {
    const remove = () => {
      removeItem(name, 1, price);
    };

    const removeHover = modalOpen ? 'disable' : '';
    const cartStyle = modalOpen ? 'cart-' : '';

    return (
      <div className={`item__card__container`}>
        <div className="item__card__header">
          <div className="item__card__header__option">
            <span>Name:</span>
            <p>{name}</p>
          </div>
          <div className="item__card__header__option">
            <span>Quantity:</span>
            <p>{quantity}</p>
          </div>
          <div className="item__card__header__option">
            <span>Price:</span>
            <p>{price}</p>
          </div>
        </div>
        <div className={`item__card__body ${removeHover}`}>
          <div className="item__card__body__overlay">
            <div className="item__card__body__overlay__button" onClick={remove}>
              {value}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default Item;
