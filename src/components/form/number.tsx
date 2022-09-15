import React from 'react';
import { TextField } from '@material-ui/core';
import { IInputCommon } from 'types/forms/formInputs';

const NumberInputComponent = ( props: IInputCommon ) => {
  const { value, handleChange, required } = props;
  return(
    <TextField 
      required={required}
      color="secondary" 
      type="number" 
      label="Placeholder"
      value={value}
      onChange={handleChange}
      fullWidth
      InputLabelProps={{
        shrink: true,
      }} />
  )

};

export default NumberInputComponent;