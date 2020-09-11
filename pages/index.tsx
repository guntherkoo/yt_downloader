import React, { Component } from 'react';
import { NextPageContext } from 'next';

import styles from './index.scss';

// any modifications to the default context, e.g. query types
interface Context extends NextPageContext {}

interface IndexProps {
  domain?: string;
}

interface IndexState {
}

class Index extends Component<IndexProps, IndexState> {
	static async getInitialProps(ctx: Context) {
		console.log('############# YT Download Landing Page');

		const is_dev = process.env.NODE_ENV === 'development';
		const domain = `http${is_dev ? '' : 's'}://${ctx.req && ctx.req.headers.host}`;

		return { domain }
	}

	private inputRef = React.createRef<HTMLInputElement>();

	handleOnClick = () => {
		const { domain } = this.props;

		if (this.inputRef.current) {
			const url = this.inputRef.current.value;

			window.open(`${domain}/download?url=${url}`);
		}
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
						ref={this.inputRef}
						className={styles('input')}
						placeholder='https://www.youtube.com/watch?v=qATOgfmgRKo...'
					/>
					<button
						type='button'
						id='btn-download'
						onClick={this.handleOnClick}
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