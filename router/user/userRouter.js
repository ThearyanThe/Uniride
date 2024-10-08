const express=require("express")
const { register } = require("../../controller/user/userCntrl")
const userRouter=express.Route()
userRouter.post('/',register)
module.exports =userRouter