import { Link } from 'react-router-dom';

import GoalForm from '../AddGoalForm/AddGoalForm';

function AddGoalPage() {
  return (
    <div>
      <h1>New Lit Goal</h1>
      <GoalForm />
      <Link to="user">
        <button type="button">Back</button>
      </Link>
    </div>
  );
}

export default AddGoalPage;
