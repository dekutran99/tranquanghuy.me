import path from 'path';
import fs from 'fs';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../../src/App.js';


const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
	const app = ReactDOMServer.renderToString(<App />);

	const indexFile = path.resolve('./build/index.html');
	fs.readFile(indexFile, 'utf8', (err, data) => {
		if (err) {
			console.error('Something went wrong:', err);
			return res.status(500).send('Internal server error.');
		}
		return res.send(
			data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
		);
	});
});


export default router;
