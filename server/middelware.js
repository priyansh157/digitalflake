const jwt = require('jsonwebtoken');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "digitalflake",
});

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'test');
    const email = decoded._id;

    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], (err, results) => {
      if (err || results.length === 0) {
        console.log('no user found');
        return res.status(401).send({ error: "Please authenticate properly" });
      }

      req.user = results[0];
      req.token = token;
      next();
    });
  } catch (error) {
    res.status(401).send({ error: "Please authenticate properly" });
  }
};

module.exports = auth;
