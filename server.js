const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB ulanish
connectDB();

// Bosh sahifa ro'yxati
app.get("/", (req, res) => {
  res.send("Welcome to the Grocery Store API");
});
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
