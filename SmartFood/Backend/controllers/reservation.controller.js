const pool = require("../db");

exports.getReservations = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM reservations");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching reservations");
  }
};
