import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function BookList() {
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
            </ul>
          </div>
        );
      })}
    </section>
  );
}

export default BookList;
