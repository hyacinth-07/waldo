const express = require('express');
const app = express();
const PORT = 3000;

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.get('/', (req, res) => {
	res.json({ message: 'hewwo' });
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
