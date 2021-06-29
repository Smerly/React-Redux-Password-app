import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPassword } from './actions';
import zxcvbn from 'zxcvbn';
import 'bootstrap/dist/css/bootstrap.min.css';

function Password() {
	const dispatch = useDispatch();
	const generatePassword = () => {
		const character = [
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j',
			'k',
			'l',
			'm',
			'n',
			'o',
			'p',
			'q',
			'r',
			's',
			't',
			'u',
			'w',
			'x',
			'y',
			'z',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'$',
			'#',
			'@',
			'!',
			'%',
			'^',
			'&',
			'*',
		];
		// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
		// const randomNumber = Math.floor(
		// 	Math.random() * ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].length
		// );
		// const randomLetter = letters[Math.floor(Math.random() * letters.length)];
		// const newPassword = `${randomLetter}${randomNumber}${randomLetter}-${randomNumber}${randomLetter}${randomNumber}-${randomLetter}${randomNumber}${randomLetter}`;
		// setPassword(newPassword);
		const newPassword = `${
			character[Math.floor(Math.random() * character.length)]
		}${character[Math.floor(Math.random() * character.length)]}${
			character[Math.floor(Math.random() * character.length)]
		}-${character[Math.floor(Math.random() * character.length)]}${
			character[Math.floor(Math.random() * character.length)]
		}${character[Math.floor(Math.random() * character.length)]}-${
			character[Math.floor(Math.random() * character.length)]
		}${character[Math.floor(Math.random() * character.length)]}${
			character[Math.floor(Math.random() * character.length)]
		}`;
		setPassword(newPassword);
	};

	const [name, setName] = useState('name');
	const [password, setPassword] = useState('some password');
	console.log(zxcvbn('m*l-cgi-j17'));
	const [description, setDescription] = useState('some description');
	return (
		<div className="holder">
			<h1 className="mt-5"> Password Saver </h1>
			<div className="line"></div>
			<header className="mt-3 mb-3">Password: {password}</header>
			<header className="mt-3 mb-3">Description: {description}</header>
			<header className="mt-3 mb-3">Name: {name}</header>

			<button
				onClick={(e) => {
					generatePassword();
				}}
				className="mr-3 p-2"
			>
				Generate a Password
			</button>
			<input
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				className="mr-3 p-2"
			/>

			<button
				onClick={(e) => {
					dispatch(addPassword(name, password));
				}}
				className="mr-3 p-2"
			>
				Save
			</button>

			<input
				type="text"
				onChange={(e) => setDescription(e.target.value)}
				value={description}
				className="mr-3 p-2"
			/>
			<input
				value={name}
				onChange={(e) => setName(e.target.value)}
				className="mr-3 p-2"
			/>
		</div>
	);
}

export default Password;
