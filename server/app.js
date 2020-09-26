import express from 'express';
import router from './routes/index';

const app = express();
const PORT = 3001;
const createError = require('http-errors');


app.use('/', router);

app.use(express.static('./build'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});


export default app;