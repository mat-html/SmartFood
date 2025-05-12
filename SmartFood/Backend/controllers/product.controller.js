import pool from "../config/db.js";

export const getProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM product");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching products");
  }
};
