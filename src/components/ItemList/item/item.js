import React from 'react';
import {observer} from 'mobx-react';

const Item = observer(
  ({name, description, quantity, removeItem, index, price, value}) => {
    const remove = () => {
      removeItem(name, 1, price);
    };

    return (
      <div className="item__card__body">
        <div className="item__card__header">
          <p>name: {name}</p>
          <p>quantity: {quantity}</p>
          <p>unit price: {price}</p>
        </div>
        <div className="item__card__body">
          <img className="item__card__body__background" src="" alt="" />
          <div className="item__card__body__overlay">
            <a
              className="item__card__body__overlay__button"
              onClick={remove}
              href="#">
              {value}
            </a>
          </div>
        </div>
      </div>
    );
  },
);

export default Item;
