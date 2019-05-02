import { createStore } from 'redux';
import rootReducer from '../reducer';

const configureStore = () => createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const store = configureStore();

export default store;
