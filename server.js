const express = require('express');
const next = require('next');
const compression = require('compression');
const ytdl = require('ytdl-core');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const routes = require('./routes.js');
const handler = routes.getRequestHandler(app);

global.fetch = require('isomorphic-unfetch');

app
	.prepare()
	.then(() => {
		const server = express();
		server.use(compression());

		server.get('/favicon.ico', (req, res) => {
			console.log(req, res, '!@!@');
			return (
				res.status(200).sendFile('favicon.ico', {root: __dirname + '/static/'})
			);
		});

		server.get('/download', async (req, res) => {
			const url = req.query.url;

			try {
				let info = await ytdl.getInfo(url);
				const video_title = info.videoDetails.title.replace(/\s+/g, '-');

				res.header('Content-Disposition', `attachment; filename="${video_title}.mp4"`);

				ytdl(url, {
			    	format: 'mp4',
			    	quality: 'highest',
			    }).pipe(res);

			    return app.render(req, res, '/Download');
			}

			catch (err) {
				console.log('Error locating video...', err);

				return app.render(req, res, '/404');
			}
				
		});

    	server.get('*', (req, res) => handler(req, res))

	    server.listen(9000, (err) => {
	    	if (err) throw err 
	    		console.log('SSR Server ready on http://localhost:9000');
	    });
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});
