import { useState } from 'react';
import { Link } from 'react-router-dom';
import DeadlineButton from '../DeadlineButton/DeadlineButton';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function GoalForm() {
  const [title, setTitle] = useState('');
  const [number, setNumber] = useState('');
  const [chp_pgs, setChp_Pgs] = React.useState('');

  const handleChange = (event) => {
    setChp_Pgs(event.target.value);
  };

  return (
    <section>
      <form className="add_goal_form">
        <input
          required
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          required
          placeholder="#"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Chp/Pgs</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={chp_pgs}
              label="Chp/Pgs"
              onChange={handleChange}
            >
              <MenuItem>Chapter</MenuItem>
              <MenuItem>Chapters</MenuItem>
              <MenuItem>Page</MenuItem>
              <MenuItem>Pages</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <DeadlineButton />

        <Link to="user">
          <button type="submit">Save New Goal</button>
        </Link>
      </form>
    </section>
  );
}

export default GoalForm;
