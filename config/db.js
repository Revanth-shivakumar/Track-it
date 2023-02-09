// mongodb config for connection
const mongoose=require('mongoose');
const config=require('config');
const { connect } = require('http2');
mongoURL=""
const db=config.get('mongoURL');

const dbConnect=async ()=>{
    try{
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('mongo connected');
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
};

module.exports=dbConnect;