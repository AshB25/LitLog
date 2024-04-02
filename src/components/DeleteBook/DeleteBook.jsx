import { useDispatch, useSelector } from 'react-redux';

const DeleteBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books);

  const handleClickDelete = () => {
    dispatch({ type: 'DELETE_BOOKS' });
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
