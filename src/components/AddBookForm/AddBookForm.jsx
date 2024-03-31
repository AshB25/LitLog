import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
import { Link } from 'react-router-dom';

function BookForm({ refreshBookList }) {
  const dispatch = useDispatch();
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  // // const [pubdate, setPubDate] = useState('');
  // const [pagecount, setPageCount] = useState('');
  // const [cover, setCover] = useState('');
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    pagecount: '',
    cover: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'POST_BOOKS', payload: newBook });
    setNewBook({ title: '', author: '', pagecount: '', cover: '' });

    //   console.log('Add Book', { title, author, pubdate, pagecount, cover });

    //   axios
    //     .post('/api/books', { title, author, pubdate, pagecount, cover })
    //     .then((response) => {
    //       refreshBookList();
    //     })
    //     .catch((error) => {
    //       console.log('post book', error);
    //     });

    //   setTitle('');
    //   setAuthor('');
    //   setPubDate('');
    //   setPageCount('');
    //   setCover('');
  };

  return (
    <section>
      <h2>New Lit to Read</h2>
      <form onSubmit={handleSubmit} className="add_book_form">
        <input
          required
          placeholder="Title"
          value={newBook.title}
          onChange={(event) =>
            setNewBook({ ...newBook, title: event.target.value })
          }
        />

        <input
          required
          placeholder="Author"
          value={newBook.author}
          onChange={(event) =>
            setNewBook({ ...newBook, author: event.target.value })
          }
        />

        <input
          required
          placeholder="Published"
          value={newBook.pubdate}
          onChange={(event) =>
            setNewBook({ ...newBook, pubdate: event.target.value })
          }
        />

        <input
          required
          placeholder="Page Count"
          value={newBook.pagecount}
          onChange={(event) =>
            setNewBook({ ...newBook, pagecount: event.target.value })
          }
        />

        <input
          required
          placeholder="Cover"
          value={newBook.cover}
          onChange={(event) =>
            setNewBook({ ...newBook, cover: event.target.value })
          }
        />

        <Link to="user">
          <button onClick={handleSubmit}>Add New Book</button>
        </Link>
      </form>
    </section>
  );
}

export default BookForm;
