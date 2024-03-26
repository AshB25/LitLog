import { Link } from 'react-router-dom';

function AddGoalPage() {
  return (
    <div>
      <h1>New Lit Goal</h1>
      <Link to="user">
        <button type="button">Back</button>
      </Link>
    </div>
  );
}

export default AddGoalPage;
