const {getCinfoByQuery} = require('../module/module')

function getByQuery(customerquery){
    return new Promise((resolve,reject)=>{
        getCinfoByQuery(customerquery)
        .then((response)=>{
            return resolve(response)
        }).catch((error)=>{
            return reject(error)
        })
    })
}

module.exports = {getByQuery}