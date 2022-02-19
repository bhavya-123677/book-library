const express=require('express')
const router=express.Router()
const Book=require('../models/book')
router.get('/',async(req,res)=>{
   try{
     const books=await Book.find()
     res.json(books)
   }catch(err){

    res.send('error' + err)
   }
})
router.get('/:id',async(req,res)=>{
    try{
      const book=await Book.findById(req.params.id)
      res.json(book)
    }catch(err){
 
     res.send('error' + err)
    }
 })
 router.get('/:category',async(req,res)=>{
    try{
      const books=await Book.findById(req.params.category)
      res.json(books)
    }catch(err){
 
     res.send('error' + err)
    }
 })
 


 router.get('/:username',async(req,res)=>{
    try{
      const books=await Book.findBy(req.params.username)
      res.json(books)
    }catch(err){
 
     res.send('error' + err)
    }
 })
router.post('/',async(req,res)=>{
    const book=new Book({
        bookname:req.body.bookname,
        category:req.body.category,
        username:req.body.username,
        date:req.body.date
    })
    try{
       const b1=await book.save()
       res.json(b1)
    }catch(err){
        res.send('error')
    }
})

module.exports=router