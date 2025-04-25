import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import feedbackRoutes from "./routes/feedbackRoute.js";

const app=express();
app.use(express.json())
app.use(cors())
dotenv.config();

const PORT=process.env.PORT
const MongoDB=process.env.MongoDB

mongoose.connect(MongoDB,{
    serverSelectionTimeoutMS: 5000
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err,"err"));

app.use("/api/feedbacks", feedbackRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
