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
		title: 'YT Downloader',
		description: 'Quick, download your favorite YouTube videos!',
		image: 'https://www.kapwing.com/resources/content/images/2019/07/final_5d1a76214bc82f00133c2e6a_500831.jpg',
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
				<title>{title}</title>
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
