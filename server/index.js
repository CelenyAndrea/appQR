import app from "./app.js"
import { connectDB } from "./db.js";
import dotenv from 'dotenv'

dotenv.config({path: './.env'});

const PORT = process.env.PORT
// npm run dev
connectDB();
app.listen(PORT);
console.log("Ok servidor render", PORT);
