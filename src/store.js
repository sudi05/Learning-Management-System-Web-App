import { createStore, combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer'; // Import your login reducer

const rootReducer = combineReducers({
  login: loginReducer,
});

const store = createStore(rootReducer);

export default store;