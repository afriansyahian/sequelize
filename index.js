const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const sequelize = require("./confiq/db")
const User = require("./models/user")
const app = express();

const port = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .then(() => {
    User.sync({force:true}).then(() => console.log (`table created`)).catch(error => console.log(error)
    );
    // product.sync().then(() => console.log (`table product created`))
  })
  .catch(err => {
   console.error('Unable to connect to the database:', err);
  })

app.get("/", (req, res)=> req.send ("HELLO WORLD! Express and Sequlized"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
