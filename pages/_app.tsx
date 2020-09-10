import * as React from 'react'
import App from 'next/app'
import Meta from '@components/meta'

import 'styles/styles.scss';

class NextTypeScriptApp extends App {
	render () {
		const { Component, pageProps } = this.props;

		return (
			<>
				<Meta />
				<Component {...pageProps} />
			</>
		)
	}
}

export default NextTypeScriptApp
