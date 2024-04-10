import { useDispatch, useSelector } from 'react-redux';

const DeleteBook = ({ bookID }) => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books);
  const user = useSelector((store) => store.user);

  const handleClickDelete = () => {
    dispatch({ type: 'DELETE_BOOKS', payload: { id: bookID } });
  };

  return (
    <div>
      <button className="delete" onClick={handleClickDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteBook;
