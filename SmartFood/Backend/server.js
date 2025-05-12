import express from "express";
import cors from "cors";
import cartRoutes from "./routes/cart.route.js";
import productRoutes from "./routes/product.route.js";
import reservationRoutes from "./routes/reservation.route.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/carts", cartRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reservations", reservationRoutes);

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
