const UserModel= require("../models/userModel")


const createBook=async function(req,res){
    let data=req.body
    let bookData=await userModel.create(data)
    res.send({msg:bookData})
}

const getBookData=async function(req,res){
    let allbook=await userModel.find()
    res.send({msg:allbook})
}

module.exports.createBook=createBook
module.exports.getBookData=getBookData