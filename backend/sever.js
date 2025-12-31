import express from "express";
import dotenv from 'dotenv';
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.get("/", (req,res)=>{
res.send("Welcome to the GSES API");
});
app.listen(port, ()=>{
    console.log(`sever running on http://localhost:${port}`)
})