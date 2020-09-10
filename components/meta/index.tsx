import React, { Component } from 'react'
import Head from 'next/head'

type MetaProps = {
	title: string,
	description: string,
	image: string,
	url: string,
}

class Meta extends Component<MetaProps> {
	static defaultProps = {
		title: 'Typescript + NextJS Boilerplate',
		description: 'Typescript + NextJS Boilerplate by Gunther Koo',
		image: 'https://images.prismic.io/koofolio/6abc0a59-b849-4e35-a73b-ea9faf76ff2a_Screen+Shot+2020-02-28+at+1.43.17+PM.png',
		url: 'https://www.guntherkoo.com',
	}

	render() {
		const {
			title,
			description,
			image,
			url,
		} = this.props;

		return (
			<Head>
				<title>{title ? title : 'Gunther Koo | Front-End UX Engineer'}</title>
	            <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
	            <link rel='icon' sizes='64x64' href='/static/favicon.ico' />

	            <meta property='og:title' content={title && title} />
	            <meta property='og:description' content={description && description} />
	            <meta property='og:image' content={image && image} />
	            <meta property='og:url' content={url && url} />

	            <meta name='twitter:card' content='summary_large_image' />
	            <meta property='twitter:title' content={title && title} />
	            <meta property='twitter:description' content={description && description} />
	            <meta property='twitter:image' content={image && image} />
	            <meta property='twitter:image:src' content={image && image} />
			</Head>
		)
	}
}

export default Meta
