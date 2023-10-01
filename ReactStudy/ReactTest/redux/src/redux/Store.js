import { createStore } from 'redux';
import { todoApp } from './Reducer';

const store = createStore(todoApp);

export default store;
