import express from "express";
import connectDB from "./config/db.js";

import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();

connectDB();

const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
