import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import AddBookButton from '../AddBookButton /AddBookButton';
import BookList from '../BookList/BookList';
import { useSelector } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Edit Profile</p>
      <h3>Goals</h3>
      <BookList />
      <AddBookButton />
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
