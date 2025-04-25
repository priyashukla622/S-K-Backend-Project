import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port=5000;

const app=express();

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
