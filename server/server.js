const bcrypt = require("bcrypt");
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
const { Console } = require("console");
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

const auth = require('./middleware');

app.post('/signup', (req, res) => {
  try {
    const { email, password } = req.body;

    const sql = "";

    const encryptedPassword = bcrypt.hash(password, 8);

    // save the data in db

    res.send({ message: "Account Created Succesfully" });

  } catch (error) {
    console.log(error);
  }
})

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ?";



  // FIRST FIND THE USER BY EMAIL

  if (email = user.email) {
    return res.statusCode(404).send({
      message: "User Not found"
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch){
    return res.status(400).send({
      message: "Wrong Credentials"
    });
  }

  const token = jwt.sign({ _id: user.email }, 'test');;

  res.send({
    token: token,
    message: "user authenticated successfully"
  });


});



app.get('/test', auth, async (req, res) => {
  try {
    



  } catch (error) {
    console.log(error);
  }
})






app.listen(port, () => {
  console.log(`listening on port ${port} `);
});