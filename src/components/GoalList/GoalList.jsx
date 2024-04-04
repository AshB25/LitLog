import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function GoalList() {
  const dispatch = useDispatch();
  const goals = useSelector((store) => store.goals);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_GOALS', payload: user.id });
  }, []);

  return (
    <Box id="" sx={{ width: '30%', height: '30%' }}>
      <Stack spacing={2}>
        <section className="goals">
          {goals.map((goals) => {
            return (
              <div class="single-line" key={goals.id}>
                <Item>
                  <p>{goals.book_title}</p>
                  <p>{goals.number}</p>
                  <p>{goals.chp_pgs}</p>
                  <p>{goals.deadline}</p>
                </Item>
              </div>
            );
          })}
        </section>
      </Stack>
    </Box>
  );
}

{
  /* <div>
  <div id='external-events'>
  <p>
    <strong>Goals</strong>
  </p>

  <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
    <div class='fc-event-main'>{goals.id}</div>
    {goals.map((goals) => {
            return (
              <div key={goals.id}>
                  <h6>{goals.book_title}</h6>
                  <h6>{goals.number}</h6>
                  <h6>{goals.chp_pgs}</h6>
                  <h6>{goals.deadline}</h6>
              </div>
            );
          })}
  </div>

  </div>

  <p>
    <input type='checkbox' id='drop-remove' />
    <label for='drop-remove'>remove after drop</label>
  </p>
</div>
</div>
<div id='calendar-container'>
  <div id='calendar'></div>
</div> */
}
export default GoalList;
