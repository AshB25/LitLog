import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import DeadlineButton from '../DeadlineButton/DeadlineButton';
import ChpPgButton from '../ChpPgButton/ChpPgButton';

function GoalForm() {
  const dispatch = useDispatch();
  // const [title, setTitle] = useState('');
  // const [number, setNumber] = useState('');
  const [newGoal, setNewGoal] = useState('');

  const addGoal = (event) => {
    event.preventDefault();
    dispatch({ type: 'POST_GOALS', payload: newGoal });
    setNewGoal({ title: '', number: '' });
  };

  return (
    <section>
      <form className="add_goal_form">
        <input
          required
          placeholder="Title"
          value={newGoal.title}
          onChange={(event) =>
            setNewGoal({ ...newGoal, title: event.target.value })
          }
        />
        <input
          required
          placeholder="#"
          value={newGoal.number}
          onChange={(event) =>
            setNewGoal({ ...newGoal, number: event.target.value })
          }
        />

        <ChpPgButton />
        <DeadlineButton />

        <Link to="user">
          <button onClick={addGoal}>Save New Goal!</button>
        </Link>
      </form>
    </section>
  );
}

export default GoalForm;
