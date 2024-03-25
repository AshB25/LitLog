import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AddBookPage() {
  return (
    <div>
      <h1>New Lit to Read</h1>
      <p>Add New Book</p>
      <Link to="user">
        <button type="button">Back</button>
      </Link>
    </div>
  );
}

export default AddBookPage;
