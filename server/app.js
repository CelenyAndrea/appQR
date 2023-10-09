import express from "express"
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'

import authRoutes from "./routes/auth.routes.js";
import petRoutes from "./routes/pet.routes.js";

const app = express();
app.disable('x-powered-by')

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors())

// const whiteList = ['http://localhost:5173', 'https://app-qr-sigma.vercel.app/']

// app.use(cors({
    
//     origin: "*",
//     origin: "http://localhost:5173",
//     origin: whiteList,
//     credentials: true,
//     methods: ['GET','POST','DELETE','UPDATE','PUT'],
//     allowedHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header', 'X-Auth-Token']
// }));

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

app.use("/api", authRoutes);
app.use("/api", petRoutes);

console.log(__dirname);
app.use(express.static(join(__dirname, '../client/dist')))

export default app;