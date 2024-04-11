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

// function* deleteGoals(action) {
//   try {
//     console.log('delete goal action.payload:', action.payload);
//     // const deleteBooksResponse = yield axios.delete(`/api/books/`);
//     const deleteGoalsResponse = yield axios({
//       method: 'DELETE',
//       url: '/api/goals/',
//       data: action.payload,
//     });
//     yield put({ type: 'FETCH_GOALS', payload: deleteGoalsResponse.data });
//   } catch (error) {
//     console.log('delete saga error', error);
//   }
// }

function* updateGoals(action) {
  try {
    console.log('update goal saga', action.payload);
    yield axios({
      method: 'PUT',
      url: '/api/goals',
      data: action.payload,
    });
    yield put({ type: 'FETCH_GOALS', payload: action.payload.goalsID });
  } catch (error) {
    console.log('update goals error', error);
  }
  // yield put({ type: 'SET_GOALS', payload: action.payload });
}

function* goalsSaga() {
  yield takeLatest('FETCH_GOALS', fetchGoals);
  yield takeLatest('POST_GOALS', postGoals);
  yield takeLatest('UPDATE_GOALS', updateGoals);
  // yield takeLatest('DELETE_GOALS', deleteGoals);
}

export default goalsSaga;
