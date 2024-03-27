import { useState } from 'react';
import { Link } from 'react-router-dom';

import DeadlineButton from '../DeadlineButton/DeadlineButton';
import ChpPgButton from '../ChpPgButton/ChpPgButton';

function GoalForm() {
  const [title, setTitle] = useState('');
  const [number, setNumber] = useState('');

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

        <ChpPgButton />
        <DeadlineButton />

        <Link to="user">
          <button type="submit">Save New Goal!</button>
        </Link>
      </form>
    </section>
  );
}

export default GoalForm;
