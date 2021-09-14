const {getCinfoById} = require('../module/module')


function getById(customerid){
    return new Promise((resolve,reject)=>{
        getCinfoById(customerid)
        .then((response)=>{
            return resolve(response)
            
        }).catch((error)=>{
                return reject(error)
            })
    })
}
module.exports = {getById}