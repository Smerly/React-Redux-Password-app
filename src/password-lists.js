// import React, { useState } from 'react';
// import { connect, useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { addPassword } from './actions';

// function PasswordList() {
// 	const [name, setName] = useState('');

// 	// Does the below automatically assume the parameter of 'state' is from the store from provider from the store?
// 	const passwords = useSelector((state) => state.passwords);

// 	const passwordList = passwords.map((pass, index) => {
// 		return (
// 			<div key={index}>
// 				<input value={name} onChange={(e) => setName(e.target.value)} />
// 				name: {pass.name} password: {pass.password}
// 			</div>
// 		);
// 	});

// 	return <div>{passwordList}</div>;
// }

// export default PasswordList;

import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';

function PasswordList() {
	const passwords = useSelector((state) => state.passwords);

	const passwordList = passwords.map((pass, index) => {
		return (
			<div key={index}>
				name:{pass.name} password: {pass.password}
			</div>
		);
	});

	return <div>{passwordList}</div>;
}

export default PasswordList;
