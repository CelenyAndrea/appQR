import express from "express"
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";

import authRoutes from "./routes/auth.routes.js";
import petRoutes from "./routes/pet.routes.js";

const app = express();
app.disable('x-powered-by')

const whiteList = ['http://localhost:5173', 'https://app-qr-sigma.vercel.app/']

app.use(cors({
    
    //origin: "*",
    //origin: "http://localhost:5173",
    origin: whiteList,
    credentials: true,
    methods: ['GET','POST','DELETE','UPDATE','PUT','OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header'],
    optionsSuccessStatus: 200,
}));

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

app.use("/api", authRoutes);
app.use("/api", petRoutes);

export default app;