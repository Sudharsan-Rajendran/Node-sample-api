const {getUserList} = require('../module/module')

function getUsers(){
    return new Promise((resolve,reject)=>{
        getUserList()
        .then((response)=>{
            return resolve(response)
        }).catch((error)=>{
            return reject(error)
        })
    })
}
module.exports = {getUsers}