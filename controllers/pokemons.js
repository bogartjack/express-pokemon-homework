const express = require('express');
const router = express.Router();
const Pokemon = require('../models/pokemon.js');

router.get('/', (req, res) =>{
	res.render('index.ejs', {pokemon: Pokemon});
});

router.get('/:id', (req, res) =>{
	res.render('show.ejs', {which: Pokemon[req.params.id]});
});	

module.exports = router;
