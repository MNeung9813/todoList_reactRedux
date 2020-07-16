import { combineReducers } from 'redux';
import todos from './todos';
import history from './history';

export default combineReducers({
    todos,
    history
});