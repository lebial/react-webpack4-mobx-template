import React from 'react';
import { observer, inject } from 'mobx-react';

const ItemInput = inject('store')(observer(
  () => (
  );
));

export default ItemInput;

