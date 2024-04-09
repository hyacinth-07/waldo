const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const indexRouter = require('./routes/index');

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES

app.use('/', indexRouter);

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
