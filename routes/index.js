﻿var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
	req.session.user = `khoa${Math.random() * 1000}`;
	res.render('index', { title: 'Express' });
});

module.exports = router;