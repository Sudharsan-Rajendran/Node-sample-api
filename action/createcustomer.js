const {createUserModule} = require('../module/module') 

function createUser(data){
    return new Promise((resolve,reject)=>{
        validateUserData(data)
        .then((response)=>{
            return createUserModule(data)
        })
        .then((response)=>{
            return resolve(response)
        })
        .catch((error)=>{
            return reject(error)
        })
    })
} 

function validateUserData(data){
    return new Promise((resolve,reject)=>{
        if(!data.hasOwnProperty('firstname')){
            var errResponse = { error_code: '400', error_msg: 'Bad Request', error_details: 'The given value [firstname] should be within the sub-schema' };
            return reject(errResponse);
        }
        else if(!data.hasOwnProperty('lastname')){
            var errResponse = { error_code: '400', error_msg: 'Bad Request', error_details: 'The given value [lastname] should be within the sub-schema' };
            return reject(errResponse);
        }
        else if(!data.hasOwnProperty('id')){
            var errResponse = { error_code: '400', error_msg: 'Bad Request', error_details: 'The given value [id] should be within the sub-schema' };
            return reject(errResponse);
        }
        else{
            return resolve(data)
        }
    })
}
module.exports = {createUser}