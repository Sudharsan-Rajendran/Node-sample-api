const express = require('express');
const bodyParser = require('body-parser');
const {createUser} = require('../action/createcustomer')
const {getUsers} = require('../action/getcustomer')
const {getById} = require('../action/getbyid')
const {getByQuery} = require('../action/getbyquery')
const {updateCustomerById} = require('../action/updatecustomer')
const {deleteCustomerById} = require('../action/deletecustomer')

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

// get customer byid
app.get('/get/:user_id',(req,res)=>{
    var customerid = req.params.user_id
    console.log('Customer id:',customerid);
    getById(customerid)
    .then((response)=>{
        res.status(200).json(response);
    }).catch((error)=>{
        res.status(400).json(error);
    })

})

// get customer byquery
app.get('/',(req,res)=>{
    var customerquery = req.query.firstname
    getByQuery(customerquery)
    .then((response)=>{
        res.status(200).json(response);
    }).catch((error)=>{
        res.status(400).json(error);
    })
})

// update customer byid
app.put('/:user_id',(req,res)=>{
    var customeupdateid = req.params.user_id;
    var bodydata = req.body;
    updateCustomerById(customeupdateid,bodydata)
    .then((response)=>{
        res.status(200).json(response);
    }).catch((error)=>{
        res.status(400).json(error);
    })
})

// delete customer byid
app.delete('/:user_id',(req,res)=>{
    var deletecustomer = req.params.user_id
    deleteCustomerById(deletecustomer)
    .then((response)=>{
        res.status(200).json(response);
    }).catch((error)=>{
        res.status(400).json(error);
    })
})
module.exports = app

