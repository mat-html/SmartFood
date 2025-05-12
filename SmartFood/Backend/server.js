import express from "express";

const app = express();

// app.get("/menu", (req, res) => {});

// app.get("/reservation", (req, res) => {});

// app.get("/cart", (req, res) => {});

// console.log(process.env.MONGO_URI);

const express = require("express");
const cors = require("cors");

app.use(cors());

const cartRoutes = require("./routes/cartRoutes");
const productRoutes = require("./routes/productRoutes");
const reservationRoutes = require("./routes/reservationRoutes");

app.use("/api/carts", cartRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reservations", reservationRoutes);

app.listen(5000, () => {
  // connectDB();
  console.log("Server started at http://localhost:5000");
});
