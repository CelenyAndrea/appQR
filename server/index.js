import app from "./app.js"
import { connectDB } from "./db.js";

// npm run dev
connectDB();
app.listen(3001);
console.log("Ok servidor vercel", 3001);
