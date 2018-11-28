export const findItem = (arr, name, type = 'index') => {
  if (type === 'index') {
    return arr.findIndex(item => item.name === name);
  } else {
    return arr.find(item => item.name === name);
  }
};

export const removeItem = (arr, index, quantity) => {
  const itemQuantity = arr[index].quantity;
  quantity = Number(quantity);
  if (itemQuantity > 0 && itemQuantity >= quantity) {
    arr[index].quantity -= quantity;
    if (arr[index].quantity === 0) arr.splice(index, 1);
  } else return false;
};

export const addItem = (arr, name, index, quantity, price) => {
  quantity = Number(quantity);
  if (index !== -1) {
    arr[index].quantity += quantity;
  } else arr.push({name, quantity, price});
};
