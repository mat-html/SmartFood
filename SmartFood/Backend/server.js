import express from "express";

const app = express();

// app.get("/menu", (req, res) => {});

// app.get("/reservation", (req, res) => {});

// app.get("/cart", (req, res) => {});

// console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  // connectDB();
  console.log("Server strarted at http://localhost:5000");
});
