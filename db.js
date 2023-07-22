const mongoose=require('mongoose');
const mongoURI='mongodb+srv://suchithkumargm:SkSb292817@cluster0.mhwxpd9.mongodb.net/?retryWrites=true&w=majority';

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