const {DataTypes} = require('sequelize');
const {sequelize,Sequelize}= require("../../models/index");
const User = require("../../models/user")(sequelize,DataTypes);
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

function generateToken(user){
   // console.log(process.env.TOKEN_SECRET.toString())
   // console.log(user)
   const signed = jwt.sign(user.dataValues, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
   console.log(signed)
  return signed;
}

module.exports.page = (req, res) => {
   const {email, password} = req.body;
    console.log(req.body)
  if( email && password){
    User.findOne({ where :{email: email, password:password}}).then(data => {

      const token = generateToken(data)
      // console.log(token)
      res.status(201).json(token)
    })
    .catch(err => res.json(err))
  }else{
    res.status(401).json({msg:"login credentials failed"})
  }
}


module.exports.register = (req, res) => {


   const {email, password} = req.body, user = req.body ;

   if(email && password){
      // user.updatedAt = user.createdAt =  Date.now();
      // user.role = "admin";
      // console.log(user)
     User.create(user).then(data => {
       // console.log("good")
       const token = generateToken(data)
       // console.log(token)
       res.status(201).json(token)
     })
     .catch(err => res.json(err))
   }else{
     res.status(401).json({msg:"signup failed"})
   }
}
