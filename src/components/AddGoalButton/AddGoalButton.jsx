import { Link } from 'react-router-dom';

function AddGoalButton() {
  // const dispatch = useDispatch();
  return (
    <Link to="/addgoal">
      <p>Add New Goal</p>
    </Link>
  );
}

export default AddGoalButton;
