const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

const PORT = process.env.PORT || 8000;
const url = "mongodb://127.0.0.1:27017/todos";

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(cors());
app.use(express.json());

// try {
//   mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
//   console.log("MongoDB successfully connected");
// } catch (error) {
//   console.log(error);
// }

try {
  mongoose.connect(process.env.MONGO_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('MongoDB connnected successfully');
} catch (error) {
  console.log(error);
}

app.use(routes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

module.exports = app