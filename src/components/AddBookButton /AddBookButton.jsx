// import React from 'react';
// import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

const handleSubmit = (event) => {
  event.preventDefault();
};

function AddBookButton() {
  // const dispatch = useDispatch();
  return (
    <Link to="">
      {' '}
      <p>Add New Book</p>
    </Link>
  );
}

export default AddBookButton;
