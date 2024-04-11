import React from 'react';
import { useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import AddBookButton from '../AddBookButton /AddBookButton';
import BookList from '../BookList/BookList';
import GoalList from '../GoalList/GoalList';
import Calendar from '../FullCalendar/FullCalendar';
import AddGoalButton from '../AddGoalButton/AddGoalButton';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  return (
    <div className="container">
      <h1>Welcome, {user.username}!</h1>
      {/* <p>Edit Profile</p> */}
      <GoalList />
      <AddGoalButton />
      <Calendar />
      <BookList />
      <AddBookButton />
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
