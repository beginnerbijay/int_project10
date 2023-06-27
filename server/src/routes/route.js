const express = require('express')
const router = express.Router()
const Item = require("../models/item")

router.get("/", async(req,res)=>{
    try{
        const item = await Item.find()
        res.status(200).send(item)
    }catch(err){
        res.status(500).send(err)
    }
})

router.post("/new", async(req,res)=>{
    try{
        const {name, price, quantity} = req.body
        const item = new Item({name,price,quantity})
        const data = await item.save()
        if(data){
            res.status(200).send("new item added")
        }else{
            res.status(400).send("something is wrong")
        }
    }catch(e){
        res.status(500).send(e)
    }
})

router.get("/edit/:id", async(req,res)=>{
    try{
        const _id = req.params.id
        const data = await Item.findById(_id)
        if(data){
            res.status(200).send(data)
        }else{
            res.status(400).send("something is wrong")
        }
    }catch(e){
        res.status(500).send(e)
    }
})

router.patch("/edit/:id", async(req,res)=>{
    try{
        const _id = req.params.id
        const {name, price, quantity} = req.body
        const data = await Item.findByIdAndUpdate(_id,{name,price,quantity},{
            new:true
        })
        if(data){
            res.status(200).send("item edited")
        }else{
            res.status(400).send("something is wrong")
        }
    }catch(e){
        res.status(500).send(e)
    }
})

router.delete("/delete/:id", async(req,res)=>{
    try{
        const _id = req.params.id
        const data = await Item.findByIdAndDelete(_id)
        if(data){
            res.status(200).send("item deleted")
        }else{
            res.status(400).send("something is wrong")
        }
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router;