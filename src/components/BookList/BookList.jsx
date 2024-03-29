import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function BookList({ refreshBookList }) {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books);

  useEffect(() => {
    dispatch({ type: 'FETCH_BOOKS' });
  }, []);

  return (
    <section className="books">
      {books.map((books) => {
        return (
          <div key={books.id}>
            <ul>
              <li>{books.title}</li>
              <li>{books.author}</li>
              <img src={books.cover} alt={books.title} />
              refreshBookList={refreshBookList}
            </ul>
          </div>
        );
      })}
    </section>
  );
}

export default BookList;
