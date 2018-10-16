const express = require('express');
const router = express.Router();
const Pokemon = require('../models/pokemon.js');

router.get('/', (req, res) =>{
	res.render('index.ejs', {pokemon: Pokemon});
});

module.exports = router;
