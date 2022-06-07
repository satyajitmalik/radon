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
    let year=req.body.year
    let allBooks= await BookModel.find({year:year})
    res.send({msg:allBooks})

}
const ParticularBooks=async function(req,res){
    let fetch=req.body
    // let allBooks= await BookModel.find({$or:[{bookName:fetch.bookName},{year:fetch.year},{tags:fetch.tags},{authorName:fetch.authorName},{totalPages:fetch.totalPages}]})
    let allBooks= await BookModel.find(fetch)
    res.send({msg:allBooks})

}
const XINRBooks=async function(req,res){

    // let allBooks= await BookModel.find({$or:[{"price.indianPrice":{$eq:"100INR"}},{"price.indianPrice":{$eq:"200INR"}},{"price.indianPrice":{$eq:"500INR"}}]})
    let allBooks= await BookModel.find({"price.indianPrice":{$in:["100INR","200INR","500INR"]}})
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