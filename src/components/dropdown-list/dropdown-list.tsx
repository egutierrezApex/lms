import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IDropDownListOptions } from '../../types/AppInterfaces'
import "./dropdown-list.styles.scss";

export default function DropDownList({name, inputLabel, items, handleSelect, itemSelected}: IDropDownListOptions) {
  return (
    <div data-test="dropdown-list">       
       <FormControl className="dropdown-list">
        <InputLabel id={`dropdown-list-label-${name}`}>{inputLabel}</InputLabel>
        <Select
          labelId={`dropdown-list-label-${name}`}
          id={`dropdown-list-${name}`}
          value={itemSelected}
          onChange={handleSelect}
          name={name}
          IconComponent={ExpandMoreIcon}
        >
        {
            items.map( (item, index)=>
            <MenuItem key={index.toString()}value={item}>{item}</MenuItem>
          )
        }
        </Select>
      </FormControl>
    </div>
  );
}