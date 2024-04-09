const express = require('express');
const router = express.Router();

const data = {
	id: 'test image',
};

router.get('/', (req, res) => {
	res.send(data);
});

module.exports = router;
