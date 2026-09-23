const express = require('express');
const add = express();
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
add.use(cors());
add.use(express.json());
add.use(express.urlencoded({extended:true}));
add.use(morgan('dev'));
add.use('/api/auth', require('./Router/auth_router'));

add.use('/',(req,res)=>{
    res.status(200).json({message: "backend is running"})
})

add.listen(process.env.PORT,()=>{
    console.log(`backend started at port ${process.env.PORT}`)
})