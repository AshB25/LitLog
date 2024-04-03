import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchBooks(action) {
  try {
    const booksResponse = yield axios.get(`/api/books/${action.payload}`);
    yield put({
      type: 'SET_BOOKS',
      payload: booksResponse.data,
    });
  } catch (error) {
    console.log('fetch books error:', error);
  }
}

function* postBooks(action) {
  try {
    console.log('post book saga', action.payload);
    yield axios({
      method: 'POST',
      url: '/api/books',
      data: action.payload,
    });
    yield put({ type: 'FETCH_BOOKS' });
  } catch (error) {
    console.log('post books error', error);
  }
}

// function* deleteBooks(action) {
//   try {
//     yield axios({
//       method: 'DELETE',
//       url: '/api/books/',
//       data: action.payload,
//     });
//     yield put({ type: 'FETCH_BOOKS' });
//   } catch (error) {
//     console.log('delete saga error', error);
//   }
// }

function* booksSaga() {
  yield takeLatest('FETCH_BOOKS', fetchBooks);
  yield takeLatest('POST_BOOKS', postBooks);
  // yield takeLatest('DELETE_BOOKS', deleteBooks);
}

export default booksSaga;
