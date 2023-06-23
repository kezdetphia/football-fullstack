var express = require('express');
var router = express.Router();

const playersController = require('../controllers/players')

// // /players


//Rendering pages:
//---------------------//
//When 3000/players 
//When 3000/players/new 
//it renders the form that will trigger the post create route when submitted
router.get('/new', playersController.new)

//When 3000/players/id 
//This gets triggered when an individual
//player is clicked and it renders the show page
router.get('/:id', playersController.show)

//It renders views/players/index.ejs where the player's list is
router.get('/', playersController.index);

//When 3000/players/id/edit 
router.get('/:id/edit', playersController.edit)

//---------------------//


//Actual function that manipulates data
//---------------------//
// This gets triggered when a post form sends the information to /players 
//and it activates the create function which takes the req.body
// and redirects the /players page with the new information
router.post('/', playersController.create)

router.put('/:id', playersController.update)

router.delete('/:id', playersController.delete)

//---------------------//






















module.exports = router;
