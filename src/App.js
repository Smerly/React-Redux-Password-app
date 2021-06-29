import logo from './logo.svg';
import './App.css';
import Password from './Password';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PasswordList from './password-lists';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const PSSWRDZ_STATE = 'PSSWRDZ_STATE';

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem(PSSWRDZ_STATE);
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(PSSWRDZ_STATE, serializedState);
	} catch (err) {
		console.log('Error saving data:' + err);
	}
};

const persistedState = loadState();
const store = createStore(reducers, persistedState);
store.subscribe(() => {
	saveState(store.getState());
});

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<div>
					<Password />
					<PasswordList />
				</div>
			</div>
		</Provider>
	);
}

export default App;
