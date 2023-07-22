const mongoose=require('mongoose');
require('dotenv').config()
const mongoURI=process.env.MONGO_URL;

const connectToMongo=()=>{
    mongoose.connect(mongoURI)
    .then(()=>{
        console.log('successfully connected to database');
    })
    .catch((error)=>{
        console.log(error);
    })
}

module.exports=connectToMongo;