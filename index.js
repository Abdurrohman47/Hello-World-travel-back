require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(cors())
app.use(express.json());
app.use(require('./routes/user.route'))

mongoose.connect(process.env.MONGO_SERVER);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
