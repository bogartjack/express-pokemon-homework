const express = require('express');
const router = express.Router();
const Pokemon = require('../models/pokemon.js');

router.get('/new', (req, res) =>{
	res.render('new.ejs', {pokemon: Pokemon});
});

router.get('/:id', (req, res) =>{
	res.render('show.ejs', {which: Pokemon[req.params.id]});
});	

router.get('/:id/edit', (req, res) =>{
	res.render('edit.ejs', {which: Pokemon[req.params.id], index: req.params.id});
});

router.get('/', (req, res) =>{
	res.render('index.ejs', {pokemon: Pokemon});
});

router.put('/:id', (req, res) =>{
	Pokemon[req.params.id].name = req.body.name;
	Pokemon[req.params.id].img = req.body.img;
	res.redirect('/pokemon/'+req.params.id);
});

router.post('/', (req, res) => {
	Pokemon.push(req.body);
	res.redirect('/pokemon/'+(Pokemon.length-1));
});

module.exports = router;
