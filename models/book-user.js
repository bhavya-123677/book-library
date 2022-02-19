const mongoose=require('mongoose')
const bookSchema=new mongoose.Schema({
    bookname:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
})
module.exports=mongoose.model('Book',bookSchema)