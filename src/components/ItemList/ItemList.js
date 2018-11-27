import React from 'react';

function ItemList({ children }){
  return(
    <ul className="itemList__body">
      { children }
    </ul>
  );
}

export default ItemList;
