const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook", BookController.createBook  )

router.get("/getBooksList", BookController.getBooksList)

router.get("/BooksInYear",BookController.BooksInYear)

router.get("/ParticularBooks",BookController.ParticularBooks)

router.get("/XINRBooks",BookController.XINRBooks)

router.get("/RandomBooks",BookController.RandomBooks)

module.exports = router;