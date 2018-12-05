import React from 'react';
import './ItemList.scss';

function ItemList({children, cart}) {
  return <div className={'itemList__container'}>{children}</div>;
}

export default ItemList;
