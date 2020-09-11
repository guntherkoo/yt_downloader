import React, { Component } from 'react';
import { NextPageContext } from 'next';

import styles from './index.scss';

// any modifications to the default context, e.g. query types
interface Context extends NextPageContext {}

class Index extends Component {
	static async getInitialProps(ctx: Context) {
		console.log(ctx.query, '!@!@');

		return {}
	}

	render() {
		return (
			<div className={styles('wrapper')}>
				<div className={styles('input-container')}>
					<h1>
						Download YouTube Videos
					</h1>
					<h3>
						Copy & paste a YouTube video URL below
					</h3>
					<input
						id='url-input'
						className={styles('input')}
						placeholder='https://www.youtube.com/watch?v=qATOgfmgRKo...'
					/>
					<button
						type='button'
						id='btn-download'
						className={styles('btn-download')}
					>
						Download Now
					</button>
				</div>
			</div>
		)
	}

}

export default Index