import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connectToMongoDB.js";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
//root route http://localhost:5000/
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json()); //to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()); //parse the cookie. const token = req.cookie.jwt
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
    res.send("This is a test for runnign server again. 123");
});


app.listen(PORT, () => {
    connectToMongoDB(); //Will print out "Connect to MongoDB" on console if connect sucessfully.
    console.log(`Server Running on port ${PORT}`);
})
