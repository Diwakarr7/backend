import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";
import connectMongoDB from "./db/connectMongoDB.js";

// read the values of dot env
dotenv.config();

const app = express();
const port = process.env.PORT || 5000 ;


app.use("/api/auth", authRouter);


app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`)
  connectMongoDB();
})


