import passwordReducer from './PasswordReducer';
import { combineReducers } from 'redux';

export default combineReducers({
	passwords: passwordReducer,
});
