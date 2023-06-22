var express = require('express');
var router = express.Router();

const playersController = require('../controllers/players')

// /players


//Rendering pages:
//---------------------//
//When 3000/players then it renders views/players/index.ejs
router.get('/', playersController.index);

//When 3000/players/new it renders a views/players/new
router.get('/new', playersController.new)

//---------------------//


//Actual function that manipulates data
//---------------------//
// This gets triggered when a post form sends the information to /players 
//and it activates the create function which takes the req.body
// and redirects the /players page with the new information
router.post('/', playersController.create)
//---------------------//













module.exports = router;
