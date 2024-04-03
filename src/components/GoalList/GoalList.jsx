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

function GoalList({ refreshGoalList }) {
  const dispatch = useDispatch();
  const goals = useSelector((store) => store.goals);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_GOALS', payload: user.id });
  }, []);

  return (
    <Box sx={{ width: '50%' }}>
      <Stack spacing={2}>
        <section className="goals">
          {goals.map((goals) => {
            return (
              <div key={goals.id}>
                <Item>
                  <h6>{goals.book_title}</h6>
                  <h6>{goals.number}</h6>
                  <h6>{goals.chp_pgs}</h6>
                  <h6>{goals.deadline}</h6>
                </Item>
              </div>
            );
          })}
        </section>
      </Stack>
    </Box>
  );
}

export default GoalList;
