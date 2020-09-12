const routes = require('next-routes')()
	.add('root_index', '/', 'index')
	.add('download', '/download', 'Download')
	// .add('about', '/about', 'about')
	//.add('/:noname/:lang(en|es)/:wow+', 'complex')
	//.add({name: 'beta', pattern: '/v3', page: 'v3'})

module.exports = routes;
