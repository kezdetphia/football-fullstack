const Player = require('../models/player');




// /players

//----------------//
//Renderimg pages:
//This renders the players to the views/players/index.ejs
const index = async(req,res)=>{
  const playerDetails = await Player.find({})
  res.render('players/index', {
    players: playerDetails
  })
}

//This gets triggered when 3000/players/new and renders views/players/new.ejs
//This is with the create function 
const newPlayer = async (req,res)=>{
  res.render('players/new')
}

const show = async (req,res)=>{
  const player = await Player.findById(req.params.id)
  res.render('players/show', {
    players: player
  })
}


//----------------//



//Functions that manipulates date
//----------------//

//This function gets triggered when the post router gets triggered by a form that
//sends information to the route thats defined in the router
//This is with the newPlayer render function
const create = async (req,res)=>{
  try{
    await Player.create(req.body);
    console.log(req.body)
    res.redirect('players')
  }catch(err){
    res.render('players/new')
  }
}















//----------------//









module.exports = {
  index,
  new: newPlayer,
  create,
  show
}