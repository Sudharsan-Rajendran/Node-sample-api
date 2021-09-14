// const {updateCustomerByIdModule} = require('../module/module')
const {updateCustomerByIdModule} = require('../module/module')

function updateCustomerById(customeupdateid,bodydata){
    return new Promise((resolve,reject)=>{
        console.log(customeupdateid,bodydata);
        updateCustomerByIdModule(customeupdateid,bodydata)
        .then((response)=>{
            return resolve(response);
        }).catch((error)=>{
            return reject(error);
        })
    })
}


module.exports = {updateCustomerById}