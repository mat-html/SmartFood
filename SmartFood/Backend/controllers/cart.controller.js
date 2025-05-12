const pool = require("../db");

exports.getCarts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM carts");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching carts");
  }
};
