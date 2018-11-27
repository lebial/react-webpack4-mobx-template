import React from 'react';
import {observer} from 'mobx-react';

const FormInput = observer(function({type, name, value, handler}) {
  const handleInput = e => handler(e, name);
  return (
    <div className="form__Input">
      <input type={type} name={name} value={value} onChange={handleInput} />
    </div>
  );
});

export default FormInput;
