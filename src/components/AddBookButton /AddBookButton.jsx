// import React from 'react';
// import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

// const handleSubmit = (event) => {
//   event.preventDefault();
// };
//button to take user to add new book page
function AddBookButton() {
  // const dispatch = useDispatch();
  return (
    <Link to="/addbook">
      <p>Add New Book</p>
    </Link>
  );
}

export default AddBookButton;
