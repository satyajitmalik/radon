const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksList= async function (req, res) {

    let allBooks= await BookModel.find().select({ bookName:1,authorName : 1 ,_id:0  } )  
    
    res.send({msg: allBooks})
}

const BooksInYear=async function(req,res){
    let year=req.body
    let allBooks= await BookModel.find(year)
    res.send({msg:allBooks})

}
const ParticularBooks=async function(req,res){
    let name=req.query.bookName
    let year=req.query.year

    let allBooks= await BookModel.find({$or:[{bookName:{$eq:name}},{year:{$eq:year}}]})
    res.send({msg:allBooks})

}
const XINRBooks=async function(req,res){

    let allBooks= await BookModel.find({$or:[{price:{$eq:100}},{price:{$eq:200}},{price:{$eq:500}}]})
    res.send({msg:allBooks})

}
const RandomBooks=async function(req,res){
let allBooks= await BookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({msg:allBooks})

}

module.exports.createBook= createBook
module.exports.getBooksList= getBooksList
module.exports.BooksInYear=BooksInYear
module.exports.ParticularBooks=ParticularBooks
module.exports.XINRBooks=XINRBooks
module.exports.RandomBooks=RandomBooks