import { useDispatch, useSelector } from 'react-redux';

const DeleteBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books);
  const user = useSelector((store) => store.user);

  const handleClickDelete = (bookID) => {
    dispatch({ type: 'DELETE_BOOKS', payload: { id: user.id } });
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
