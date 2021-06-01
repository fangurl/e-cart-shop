import React from 'react';
import { CustomInput } from 'reactstrap';

const Filter = ({ id, name, checked, onChange, label }) => {
  return (
    <div>
      <CustomInput
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        label={label}
      />
    </div>
  );
};

export default Filter;