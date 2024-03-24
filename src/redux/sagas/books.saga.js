import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchBooks() {
  try {
    const booksResponse = yield axios.get('/api/books');
    yield put({
      type: 'SET_BOOKS',
      payload: booksResponse.data,
    });
  } catch (error) {
    console.log('fetch books error:', error);
  }
}

function* booksSaga() {
  yield takeLatest('FETCH_BOOKS', fetchBooks);
}

export default booksSaga;
