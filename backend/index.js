// npm run dev start code using this command 

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization']
} 
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;
// chek port work or not 

// api 

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// "http://localhost:8000/api/v1/user/register"
app.listen(PORT, () => {
    connectDB();
    console.log(`Example app listening on port ${PORT}`)
})

// mongodb+srv://harshmistry3000:zHDYWbwtDBDW6NVy@cluster0.q1kfs.mongodb.net/ 