import app from "./app.js"
import { connectDB } from "./db.js";

const PORT = process.env.PORT
// npm run dev
connectDB();
app.listen(PORT);
console.log("Ok servidor render", PORT);
