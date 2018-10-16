const express = require('express');
const router = express.Router();
const Pokemon = require('../models/pokemon.js');

router.get('/new', (req, res) =>{
	res.render('new.ejs', {pokemon: Pokemon});
});

router.get('/:id', (req, res) =>{
	res.render('show.ejs', {which: Pokemon[req.params.id]});
});	

router.get('/', (req, res) =>{
	res.render('index.ejs', {pokemon: Pokemon});
});

router.post('/', (req, res) => {
	Pokemon.push(req.body);
	res.redirect('/pokemon/'+(Pokemon.length-1));
});

module.exports = router;
