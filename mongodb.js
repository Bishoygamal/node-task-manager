//CRUD Create

const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const objectID=mongodb.ObjectID;

const {MongoClient,ObjectID} = require('mongodb');
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());
MongoClient.connect(connectionUrl,{useNewUrlParser:true},(error,client)=>{
 if(error){
    return  console.log("unable to connect to databae")
 }

 const db = client.db(databaseName);
//  db.collection('users').insertOne({
//      _id:id,
//      name:'Bassem',
//      age:36
//  },(error,result)=>{
//     if(error){
//         return console.log("unable to insert user")
//     }
//     console.log(result.ops)
//  })

// db.collection('users').findOne({name:'Bishoy'},(error,user)=>{
//     if(error){
//         return console.log("unable to return a user")
//     }

//     console.log(user);
// })

// db.collection('users').findOne({_id:new ObjectID('5ed56c321af516b0187275bf')},(error,user)=>{
//     if(error){
//         return console.log("unable to return a user")
//     }

//     console.log(user);
// })


db.collection('users').find({age:36}).toArray((error,users)=>{
    console.log(users)
})

db.collection('users').find({age:36}).count((error,count)=>{
    console.log(count)
})
// db.collection('users').insertMany([{
//     name:'Flora',
//     age:32
// },{
//     name:'jessy',
//     age:7
// }],(error,result)=>{
//     if(error){
//         return console.log("unable to insert user")
//     }
//     console.log(result.ops)
// })

// db.collection('tasks').insertMany([{
//     description:'clean the house',
//     completed:true
// },{
//     description:'renew inspection',
//     completed:false
// },{
//     description:'pot plants',
//     completed:false
// }],(error,result)=>{
//         if(error){
//             return console.log("unable to insert tasks")
//         }
//         console.log(result.ops)
//     })
 
})