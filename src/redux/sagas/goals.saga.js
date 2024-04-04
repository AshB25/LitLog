import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchGoals(action) {
  try {
    const goalsResponse = yield axios.get(`/api/goals/${action.payload}`);
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
    console.log('post goal saga', action.payload);
    yield axios({
      method: 'POST',
      url: '/api/goals',
      data: action.payload,
    });
    yield put({ type: 'FETCH_GOALS', payload: action.payload.userId });
  } catch (error) {
    console.log('post goals error', error);
  }
}

function* goalsSaga() {
  yield takeLatest('FETCH_GOALS', fetchGoals);
  yield takeLatest('POST_GOALS', postGoals);
}

export default goalsSaga;
