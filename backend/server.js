//const express = require("express");
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import { connect } from "mongoose";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
//const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

// app.get("/", (req, res) => {
//   //root route: http://localhost:5000/
//   res.send("Hello World!");
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});
