import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// // import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';

// import UpdateGoals from '../UpdateGoals/UpdateGoals';
import CompButton from '../CompleteButton/CompleteButton';
// import DeleteGoal from '../DeleteGoal/DeleteGoal';

import '../Styling/styles.css';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

function GoalList() {
  const dispatch = useDispatch();
  const goals = useSelector((store) => store.goals);
  const user = useSelector((store) => store.user);

  // const comBtn = document.querySelector('.com-btn');
  // comBtn.addEventListener('click', () => {
  //   comBtn.style.backgroundColor = '#2d4c59';
  // });

  useEffect(() => {
    dispatch({ type: 'FETCH_GOALS', payload: user.id });
  }, []);

  // return (
  // <div>
  {
    /* <Stack direction="row" spacing={2}> */
  }
  {
    /* <section className="goals"> */
  }
  // {goals.map((goals) => {
  // return (
  // <div key={goals.id}>
  // <React.Fragment>
  // <CssBaseline />
  // <Container maxWidth="md">
  // <ul>
  //   <li>
  //   {goals.book_title} {goals.number} {goals.chp_pgs}{' '}
  //   {goals.deadline}
  // </li>
  {
    /* <li>{goals.number}</li> */
  }
  {
    /* <li>{goals.chp_pgs}</li> */
  }
  {
    /* <li>{goals.deadline}</li> */
  }
  //     </ul>
  //     <button className="delete">Delete</button>
  //   </Container>
  // </React.Fragment>
  //             </div>
  //           );
  //         })}
  //       </section>
  //       {/* </Stack> */}
  //     </div>
  //   );
  // }

  return (
    <div>
      <h2>Your Reading Goals</h2>
      <section className="goals">
        {goals.map((goals) => {
          return (
            <div key={goals.id}>
              <table class="goals-table">
                <thead>
                  <tr>
                    <th>Book Title</th>
                    <th>Goal</th>
                    <th>Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{goals.book_title}</td>
                    <td>
                      {goals.number} {goals.chp_pgs}
                    </td>
                    <td>{goals.deadline}</td>
                  </tr>
                </tbody>
              </table>
              <CompButton />
              {/* <button>
                <Link to="updategoal">Update Goal</Link>
              </button> */}
              {/* <DeleteGoal /> */}
            </div>
          );
        })}
      </section>
    </div>
  );
}
export default GoalList;
