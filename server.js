const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const port = 3000;
const pokemonController = require('./controllers/pokemons');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use('/pokemon/', pokemonController);

app.listen(port, ()=>{
	console.log('app is listening');
});
