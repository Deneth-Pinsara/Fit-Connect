import express from "express";
import morgan from 'morgan';
import dotenv from "dotenv";
import cors from "cors";
import { dbConfig } from './utils/dbConfig.js';

import gymRoutes from "./routes/gymRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
dotenv.config();

app.use(morgan('dev'));
app.use(cors());
app.get('/', async (req,res)=>{
    res.status(200).json('Server is up and running');
})

//routes
app.use("/api/gyms", gymRoutes);
app.use("/api/reviews", reviewRoutes);


dbConfig().then(()=>{
    app.listen(port,()=>{
        console.log(`🚀 Server is up and running on port ${port}`);
    })
}).catch((err)=>{
    console.log(err);
})