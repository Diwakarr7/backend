import mongoose from "mongoose";

const connectMongoDB = async ()=>{

  try{

   const conn  = await mongoose.connect(process.env.MONGO_URI)
   console.log(`mongoDB is connected: ${conn.connection.host}`)


  }catch(err){
      console.log("error connecting to mongodb");
      process.exit(1);
  }

}


export default connectMongoDB;
