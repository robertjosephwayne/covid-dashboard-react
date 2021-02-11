import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const ChartConfigSelect = ({ selectOptions, inputLabel, onChange, value }) => {
  const menuItemsList = selectOptions.map((selectOption) => (
    <MenuItem key={`${inputLabel}-${selectOption}`} value={selectOption}>
      {selectOption}
    </MenuItem>
  ));

  return (
    <FormControl className="w-36">
      <InputLabel>{inputLabel}</InputLabel>
      <Select value={value} onChange={onChange} color="primary">
        {menuItemsList}
      </Select>
    </FormControl>
  );
};

export default ChartConfigSelect;
