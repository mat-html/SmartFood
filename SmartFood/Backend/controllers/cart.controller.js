import pool from "../config/db.js";

export const getCarts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM cart");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching carts");
  }
};