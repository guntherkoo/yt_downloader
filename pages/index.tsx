import React, { Component } from 'react';
import { NextPageContext } from 'next';

import styles from './home.scss';

// any modifications to the default context, e.g. query types
interface Context extends NextPageContext {}

class Index extends Component {
	static async getInitialProps(ctx: Context) {
		console.log(ctx.query, '!@!@');

		return {
			page_props: 'Hello'
		}
	}

	render() {
		console.log(this.props, '!@!@');

		return (
			<h1 className={styles('headline')}>
				This is Nextjs TypeScript
				<a href='/about'>About</a>
			</h1>
		)
	}

}

export default Index