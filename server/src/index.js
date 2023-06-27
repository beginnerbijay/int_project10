const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./db/connection')
const router = require('./routes/route')
const Item = require('./models/item')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)


app.listen(port,()=>console.log("started at " + port))