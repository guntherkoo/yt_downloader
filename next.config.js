const { LoaderOptionsPlugin } = require('webpack')
const compose = require('next-compose')
const withSass = require('@zeit/next-sass')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

const sass = {
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: '[name]_[local]_[hash:base64:5]',
	},
};

module.exports = Object.assign(
	compose([
		[withSass, sass],
		{
			webpack: (config, options) => {
				config.plugins.push(new LodashModuleReplacementPlugin({
					shorthands: true,
				}));

				config.module.rules.unshift({
					test: /\.tsx$/,
					use: ['babel-loader'],
				});

				config.module.rules.unshift({
					test: /\.scss$/,
					use: ['classnames-loader'],
				});
				
				return config
			},
		}
	]),
	{
		target: 'serverless'
	}
);
