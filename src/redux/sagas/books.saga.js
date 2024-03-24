import axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchBooks() {
  try {
    const booksResponse = yield axios.get();
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
