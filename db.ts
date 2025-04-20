import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "your_mysql_password",
  database: "signup_db"
});
