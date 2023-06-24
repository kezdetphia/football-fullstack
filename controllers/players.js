const Player = require('../models/player');




// /players



//Functions that render pages
//----------------//
//This function renders the players to the views/players/index.ejs
const index = async(req,res)=>{
  const playerDetails = await Player.find({})

  res.render('players/index', {
    players: playerDetails
  })
}

//This function gets triggered when 3000/players/new and renders views/players/new.ejs
//This is a pair with the controller's create function 
const newPlayer = async (req,res)=>{

  res.render('players/new')
}

// This function gets triggered when a player is clicked in the players/index.ejs page
//the player's anchor tag's href triggers players/:id path in the routers
//whICH triggers this show controller function
const show = async (req,res)=>{
  const player = await Player.findById(req.params.id)
  res.render('players/show', {
    players: player
  })
}

//The views/players/show file's anchor's href triggers(edit this player) triggers 
//The players/:id/edit route and that triggers this function,
//That's how this function has the id number
//This function renders the views/players/edit.ejs
//It passes down the single player information to the edit page
const edit = async (req,res)=>{
  try{
    const player = await Player.findById(req.params.id)
    res.render('players/edit' , {
      player
    })
  }catch(err) {
    console.log(err)
  }
}
//----------------//



//Functions that manipulate data
//----------------//

//This function gets triggered when the post router gets triggered by a form that
//sends information to the route thats defined in the router
//This is a pair with the newPlayer render function
const create = async (req,res)=>{
  try{
    await Player.create(req.body);
    console.log(req.body)
    res.redirect('players')
  }catch(err){
    res.render('players/new')
  }
}


//Type out an explanation for this later
const update = async (req,res)=>{
  try{
    const updatedPlayers = {
      name: req.body.name,
      foot: req.body.foot,
      number: req.body.number,
      rating: req.body.rating,
      position: req.body.position,
    }
    await Player.findByIdAndUpdate(req.params.id, updatedPlayers);
    const players = await Player.find();
    res.render('players/index', {players})
  }catch(err){
    console.log(err)
  }
}


const deletePlayer = async(req,res)=>{
  try{
    await Player.findByIdAndDelete(req.params.id)
    const players = await Player.find()
    res.render('players/index', {players})
  }catch(err){
    console.log(err)
  }
}





//----------------//









module.exports = {
  index,
  new: newPlayer,
  create,
  show,
  edit,
  update,
  delete : deletePlayer
}