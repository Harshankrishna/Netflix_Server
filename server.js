const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
// const CONNECTION_URL = process.env.CONNECTION_URL;
const URL = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Netflix Server</h1>");
});

mongoose
  .connect(
    { URL },
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log("server started on port 5000");
});
