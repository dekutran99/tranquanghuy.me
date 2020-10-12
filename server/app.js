import express from 'express';
import router from './routes/index';
import pg from 'pg-promise';

// Create express server
const app = express();
const PORT = 3000;
// const createError = require('http-errors');

// Connect to app's database
const db = pg()(process.env.TRANQUANGHUYDOTME_DATABASE_URL);

app.use('/', router);

app.use(express.static('./build'));


// >>> LOOK MORE INTO THIS >>>
// catch 404 and forward to error handler
// app.use(function (req, res, next) {
// 	next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
// 	// set locals, only providing error in development
// 	res.locals.message = err.message;
// 	res.locals.error = req.app.get('env') === 'development' ? err : {};

// 	// render the error page
// 	res.status(err.status || 500);
// 	res.render('error');
// });
// // <<< LOOK MORE INTO THIS <<<

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});


export {
	app,
	db
};