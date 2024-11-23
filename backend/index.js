// npm run dev start code using this command 

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

dotenv.config({});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions ={
    origin:'http//localhost:5173',
    Credentials:true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;
// chek port work or not 

 app.get('/', (req, res) => {
     res.send('Hello World! ---- ')
   })

app.listen(PORT, () => {
    connectDB();
    console.log(`Example app listening on port ${PORT}`)
  })

  // mongodb+srv://harshmistry3000:zHDYWbwtDBDW6NVy@cluster0.q1kfs.mongodb.net/ 