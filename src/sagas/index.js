import { put, takeLatest, all, call } from "redux-saga/effects";
import axios from 'axios';
export function* fetchData() {
    try {
    const apidata = yield call(axios.get, 'https://5d46e636992ea9001444c6c5.mockapi.io/api/v1/users');
    if(apidata.status === 200) { 
          yield put({type:'DATA_LOADED',apidata});
    }  else {
      const status = 'fail';
      yield put({type:'DATA_NOT_LOADED',status});
    }
  } catch (error) {
      console.log(error);
    }
  }

export function* actionCreateNews() {
     yield takeLatest("FETCH_DATA", fetchData);
    //yield put({ type: "DATA_LOADED", actionData });
  }

  export default function* rootSaga() {
    yield all([ actionCreateNews()]);
  }