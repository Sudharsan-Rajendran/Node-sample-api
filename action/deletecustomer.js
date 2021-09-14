const {deleteCustomerByIdModule} = require('../module/module')

function deleteCustomerById(deletecustomer){
return new Promise((resolve,reject)=>{
    deleteCustomerByIdModule(deletecustomer)
    .then((response)=>{
        return resolve(response)
    }).catch((error)=>{
        return reject(error)
    })
})
}

module.exports = {deleteCustomerById}