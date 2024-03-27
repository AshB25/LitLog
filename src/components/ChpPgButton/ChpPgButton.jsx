import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const choices = ['Chapter(s)', 'Pages(s)'];

function getStyles(choice, oneChoice, theme) {
  return {
    fontWeight:
      oneChoice.indexOf(choice) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ChpPgButton() {
  const theme = useTheme();
  const [oneChoice, setOneChoice] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setOneChoice(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Chp/Pg</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={oneChoice}
          onChange={handleChange}
          input={<OutlinedInput label="Chp/Pg" />}
          MenuProps={MenuProps}
        >
          {choices.map((choice) => (
            <MenuItem
              key={choice}
              value={choice}
              style={getStyles(choice, oneChoice, theme)}
            >
              {choice}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
