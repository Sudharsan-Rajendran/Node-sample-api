
const{InitZapsDB} = require('../common/app_utils');
var dbconnection = InitZapsDB();
var collection1 = 'users_collections';  

function createUserCollection(collection_name,collection_id,collection_description){
    return new Promise((resolve,reject)=>{
        
        dbconnection.createCollection(collection_name,collection_id,collection_description)
        .then((response)=>{
            
            return resolve(response)
        }).catch((error)=>{
        
            return reject(error)
        })
    })
}

function createUserModule(data){
    return new Promise((resolve,reject)=>{
        dbconnection.insertOne(collection1,data)
        .then((response)=>{
            console.log('collection res',response)
        }).catch((error)=>{
            
            if(error.ErrorDetail === 'Collection not found') {
                
                createUserCollection(collection1,'user_id','user_description')
                    .then((response)=>{
                        console.log('collection res',response)
                        return dbconnection.insertOne(collection1,data)
                    }).then((response)=>{
                        console.log('insert one',response)
                        return resolve(response)
                    }).catch((error)=>{
                        console.log('collection err',error)
                        return reject(error)
                    })
            }
            
        })
    })
}

function getUserList(){
    return new Promise((resolve,reject)=>{
        dbconnection.getMany(collection1)
        .then((response)=>{
            console.log(response)
            return resolve(response)
        }).catch((error)=>{
            console.log(error)
            return reject(error)
        })
    })
}
module.exports = {createUserModule,getUserList}