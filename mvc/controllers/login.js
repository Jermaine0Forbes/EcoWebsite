const {DataTypes} = require('sequelize');
const {sequelize,Sequelize}= require("../../models/index");
const User = require("../../models/user")(sequelize,DataTypes);
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const saltRounds = 10 ;
const salt = bcrypt.genSaltSync(saltRounds);
dotenv.config();


const attr = [
  "firstName",
  "lastName",
  "role",
] 

function generateToken(user){
   // console.log(process.env.TOKEN_SECRET.toString())
   // console.log(user)
   const signed = jwt.sign(user.dataValues, process.env.TOKEN_SECRET, { expiresIn: '3 days' });
   console.log(signed)
  return signed;
}

module.exports.page = (req, res) => {
   const {email, password} = req.body;
   

   console.log(req.body)

  if(email && password){
    User.findOne({ where :{email: email, password:password}, attributes:attr }).then(data => {

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


   let { email, password} = req.body, user = req.body ;

   if(email && password){
      // user.updatedAt = user.createdAt =  Date.now();
      // user.role = "admin";
      // console.log(user)
      user.password = bcrypt.hashSync(password,salt);
     User.create(user).then(data => {
       // console.log("good")
       delete data.dataValues.password;
       delete data.dataValues.createdAt;
       delete data.dataValues.updatedAt;
       console.log(data)
       const token = generateToken(data)
       // console.log(token)
       res.status(201).json(token)
     })
     .catch(err => res.json(err))
   }else{
     res.status(401).json({msg:"signup failed"})
   }
}
