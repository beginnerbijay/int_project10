const mongoose = require('mongoose')
 
const itemSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

const Item = new mongoose.model("item", itemSchema)
module.exports = Item
