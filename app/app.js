const express = require('express');
const bodyParser = require('body-parser');
const {createUser} = require('../action/createcustomer')
const {getUsers} = require('../action/getcustomer')

const app = express();
app.use(bodyParser.json());


app.post('/post',(req,res)=>{
    var data = req.body;
    console.log(data);
    createUser(data)
    .then((response)=>{
        res.send(response)
    }).catch((error)=>{
        res.send(error)
    })
})

app.get('/get',(req,res)=>{
    getUsers()
    .then((response)=>{
        res.status(200).json(response);
    }).catch((error)=>{
        res.status(400).json(error);
    })
})


module.exports = app