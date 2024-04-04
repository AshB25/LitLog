import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import DeadlineButton from '../DeadlineButton/DeadlineButton';
// import ChpPgButton from '../ChpPgButton/ChpPgButton';

function GoalForm() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const books = useSelector((store) => store.books);
  // const goal = useSelector((store) => store.goals);

  // const [title, setTitle] = useState('');
  // const [number, setNumber] = useState('');
  const [newGoal, setNewGoal] = useState({
    book_title: '',
    number: '',
    chp_pgs: '',
    deadline: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newGoal);
    dispatch({
      type: 'POST_GOALS',
      payload: { newGoal: newGoal, userId: user.id, bookId: books.id },
    });
    setNewGoal({ book_title: '', number: '', chp_pgs: '', deadline: '' });
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="add_goal_form">
        <input
          required
          placeholder="Title"
          value={newGoal.book_title}
          onChange={(event) =>
            setNewGoal({ ...newGoal, book_title: event.target.value })
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
        <input
          required
          placeholder="Chapters/Pages"
          value={newGoal.chp_pgs}
          onChange={(event) =>
            setNewGoal({ ...newGoal, chp_pgs: event.target.value })
          }
        />
        <input
          required
          placeholder="Deadline"
          type="date"
          value={newGoal.deadline}
          onChange={(event) =>
            setNewGoal({ ...newGoal, deadline: event.target.value })
          }
        />

        {/* <ChpPgButton />
        <DeadlineButton /> */}

        <button onClick={handleSubmit}>
          <Link to="user">Save New Goal!</Link>
        </button>
      </form>
    </section>
  );
}

export default GoalForm;
