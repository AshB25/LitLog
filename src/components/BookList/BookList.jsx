import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DeleteBook from '../DeleteBook/DeleteBook';

function BookList({ refreshBookList }) {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_BOOKS', payload: user.id });
  }, []);

  return (
    <div className="container">
      <h1>Books</h1>

      <section className="books">
        {books.map((books) => {
          return (
            <div key={books.id}>
              <ul>
                {/* <li>{books.title}</li>
                <li>{books.author}</li> */}
                <img src={books.cover} alt={books.title} />
                <DeleteBook />
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
