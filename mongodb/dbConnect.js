const mongoose = require('mongoose')

const connection = {};

const dbConnect = async () =>{
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify:false
        });
}

export default dbConnect;