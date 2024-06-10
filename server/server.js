const bcrypt = require("bcrypt");
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
const { Console } = require("console");
const jwt = require("jsonwebtoken");
const app = express();
//path.resolve()
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 5000;
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "digitalflake",
});

const auth = require('./middelware');

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 8);

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, encryptedPassword], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send({ message: "Error creating account" });
      }
      res.send({ success: true, message: "Account Created Successfully" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error creating account" });
  }
});



// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ message: "Error during login" });
    }

    if (results.length === 0) {
      return res.status(404).send({ message: "User Not Found" });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send({ message: "Wrong Credentials" });
    }

    const token = jwt.sign({ _id: user.email }, 'test');
    res.send({
      token: token,
      message: "User authenticated successfully"
    });
  });
});


app.get('/test', auth, async (req, res) => {
  try {
    

  } catch (error) {
    console.log(error);
  }
})

app.use(cors());

const categories = [
  { id: 1, name: 'Mobile', image: 'mobile.jpg', status: 'Active' },
  { id: 2, name: 'Laptop', image: 'laptop.jpg', status: 'Inactive' },
  { id: 3, name: 'Grocery', image: 'grocery.jpg', status: 'Inactive' },
];

app.get('/categories', (req, res) => {
  res.json(categories);
});




app.listen(port, () => {
  console.log(`listening on port ${port} `);
});