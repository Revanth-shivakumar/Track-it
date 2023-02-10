const express=require('express');
const dbConnect=require('./config/db.js');
const cors=require('cors');
const app=express();
app.use(cors());
dbConnect();
app.use(express.json());

// port
const PORT=process.env.PORT || 6001;
app.listen(PORT,()=>console.log(`Server up at port ${PORT}`));
