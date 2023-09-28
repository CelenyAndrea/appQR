import express from "express"
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";

import authRoutes from "./routes/auth.routes.js";
import petRoutes from "./routes/pet.routes.js";
import imgRoutes from "./routes/img.routes.js"

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
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
app.use("/api", imgRoutes)

export default app;