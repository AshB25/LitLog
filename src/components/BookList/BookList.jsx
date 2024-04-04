import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../Styling/styles.css';

// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// import DeleteBook from '../DeleteBook/DeleteBook';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_BOOKS', payload: user.id });
  }, []);

  return (
    <div className="container">
      <h2>Books</h2>

      <section className="books">
        {books.map((books) => {
          return (
            <div key={books.id}>
              <ul>
                {/* <li>{books.title}</li>
                <li>{books.author}</li> */}
                <img src={books.cover} alt={books.title} />
                {/* <DeleteBook /> */}
                {/* refreshBookList={refreshBookList} */}
              </ul>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default BookList;
