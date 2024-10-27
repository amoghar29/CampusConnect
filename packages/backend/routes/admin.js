const {adminMiddleware}  = require('../middleware/admin')
const express = require('express')

const adminRouter = express.Router()

adminRouter.post('/create-event',adminMiddleware,(req,res)=>{
    res.json({"mdg": "Create an event"})
})

adminRouter.get('/listed-events',adminMiddleware,(req,res)=>{
    res.json({"list of events":"fkhfsf"})
})

