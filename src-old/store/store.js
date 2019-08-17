import {createStore,compose,applyMiddleware} from 'redux';
import reducer from './reducer';
import createSagaMiddleware from "redux-saga";
import rootSaga from '../sagas/index'
const sagaMiddleware = createSagaMiddleware();



const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__();


const store = createStore(reducer,compose(applyMiddleware(sagaMiddleware),reduxDevTools));
sagaMiddleware.run(rootSaga);
export default store;