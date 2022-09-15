import React from 'react';
import { TextField } from '@material-ui/core';
import useStyles from './styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default function InputNumber({
  name,
  label,
  placeholder,
  value,
  handleChange,
  disabled
}: any) {
  const classes = useStyles();
  return (
    <div className={classes.inputNumber}>
      <TextField
        type="tel"
        name={name}
        label={label}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        InputLabelProps={{ shrink: true }}        
        InputProps={{
          endAdornment: (
            <div className="buttons">
              <ExpandLessIcon
                viewBox='6 8.59000015258789 12 7.409999847412109'
                onClick={!disabled ? () => handleChange(value + 1): () => false}
              />
              <ExpandMoreIcon
                viewBox='6 8.59000015258789 12 7.409999847412109'
                onClick={!disabled ? () => handleChange(value - 1): () => false}
              />
            </div>
          ),
        }}
      />
    </div>
  );
}
