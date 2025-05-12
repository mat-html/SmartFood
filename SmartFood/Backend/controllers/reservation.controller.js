import pool from "../config/db.js";

export const getReservations = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tableorder");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching reservations");
  }
};
