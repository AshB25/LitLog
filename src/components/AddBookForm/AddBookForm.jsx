import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

function BookForm() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  // // const [pubdate, setPubDate] = useState('');
  // const [pagecount, setPageCount] = useState('');
  // const [cover, setCover] = useState('');
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    pubdate: 0,
    pagecount: 0,
    cover: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'POST_BOOKS',
      payload: { newBook: newBook, userId: user.id },
    });
    setNewBook({
      title: '',
      author: '',
      pubdate: '',
      pagecount: '',
      cover: '',
    });

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

        <button type="submit" onClick={handleSubmit}>
          <Link to="user">Add New Book</Link>
        </button>
      </form>
    </section>
  );
}

export default BookForm;
