const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const bookSchema = new mongoose.Schema( {
    bookName: {type:String,
                required:true }, 
    authorName: String, 
    tags: [String],
    
    stockAvailable: Boolean,
    totalPages:Number,
    
 price:{indianPrice: String, euroPrice: String},

    year:{type:Number,default:2021},
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users


