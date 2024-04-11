import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UpdateGoals() {
  const dispatch = useDispatch();
  const goals = useSelector((store) => store.goals);

  const [updateGoal, setUpdateGoal] = useState({
    book_title: '',
    number: '',
    chp_pgs: '',
    deadline: '',
    id: goals.id,
  });

  const handleClickUpdate = () => {
    dispatch({ type: 'UPDATE_GOALS', payload: { id: id } });
  };

  return (
    <>
      <h1>Update Lit Goal</h1>
      <section>
        <form onSubmit={handleClickUpdate} className="add_goal_form">
          <input
            required
            placeholder="Title"
            value={updateGoal.book_title}
            onChange={(event) =>
              setUpdateGoal({ ...updateGoal, book_title: event.target.value })
            }
          />
          <input
            required
            placeholder="#"
            value={updateGoal.number}
            onChange={(event) =>
              setUpdateGoal({ ...updateGoal, number: event.target.value })
            }
          />
          <input
            required
            placeholder="Chapters/Pages"
            value={updateGoal.chp_pgs}
            onChange={(event) =>
              setUpdateGoal({ ...updateGoal, chp_pgs: event.target.value })
            }
          />
          <input
            required
            placeholder="Deadline"
            type="date"
            value={updateGoal.deadline}
            onChange={(event) =>
              setUpdateGoal({ ...updateGoal, deadline: event.target.value })
            }
          />
        </form>
      </section>
      <button onClick={handleClickUpdate}>
        <Link to="user">Update Goal</Link>
      </button>
      <Link to="user">
        <button type="button">Back</button>
      </Link>
    </>
  );
}

export default UpdateGoals;
