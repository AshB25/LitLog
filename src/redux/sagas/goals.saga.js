import axios from 'axios';
import { put, take, takeLatest } from 'redux-saga/effects';

function* fetchGoals() {
  try {
    const goalsResponse = yield axios.get('/api/goals');
    yield put({
      type: 'SET_GOALS',
      payload: goalsResponse.data,
    });
  } catch (error) {
    console.log('fetch goals error:', error);
  }
}

function* postGoals(action) {
  try {
    yield axios({
      method: 'POST',
      url: '/api/goals',
      data: action.payload,
    });
    yield put({ type: 'FETCH_GOALS' });
  } catch (error) {
    console.log('post goals error', error);
  }
}

function* goalsSaga() {
  yield takeLatest('FETCH_GOALS', fetchGoals);
  yield takeLatest('POST_GOALS', postGoals);
}

export default goalsSaga;
