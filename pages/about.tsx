import React from 'react';
import { Student, Greeting } from '@components/Person';

import styles from './home.scss';

const About: React.FunctionComponent = () => {
	let user = new Student('Johnny', '', 'Apple');

	return (
		<h1 className={styles('headline')}>
			This is the about page {Greeting(user)}
			<a href='/'>Homepage</a>
		</h1>
	)
}

export default About;