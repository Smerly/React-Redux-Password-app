import React, { useState } from 'react';

function Password() {
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

	const [password, setPassword] = useState('something');
	return (
		<div>
			<h3>{password}</h3>
			<button
				onClick={(e) => {
					generatePassword();
				}}
			>
				Generate
			</button>
		</div>
	);
}

export default Password;
