const express = require('express');
const router = express.Router();
const Pokemon = require('../models/pokemon.js');

router.get('/', (req, res) =>{
	res.send(Pokemon);
});

module.exports = router;
