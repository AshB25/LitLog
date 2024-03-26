import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BookForm({ refreshBookList }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pubdate, setPubDate] = useState('');
  const [pagecount, setPageCount] = useState('');
  const [cover, setCover] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Add Book');

    axios
      .post('/api/books', { title, author, pubdate, pagecount, cover })
      .then((response) => {
        refreshBookList();
      })
      .catch((error) => {
        console.log('post book', error);
      });

    setTitle('');
    setAuthor('');
    setPubDate('');
    setPageCount('');
    setCover('');
  };

  return (
    <section>
      <h2>New Lit to Read</h2>
      <form onSubmit={handleSubmit} className="add_book_form">
        <input
          required
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          required
          placeholder="Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <input
          required
          placeholder="Published"
          value={pubdate}
          onChange={(event) => setPubDate(event.target.value)}
        />

        <input
          required
          placeholder="Page Count"
          value={pagecount}
          onChange={(event) => setPageCount(event.target.value)}
        />

        <input
          required
          placeholder="Cover"
          value={cover}
          onChange={(event) => setCover(event.target.value)}
        />

        <Link to="user">
          <button type="submit">Add New Book</button>
        </Link>
      </form>
    </section>
  );
}

export default BookForm;
