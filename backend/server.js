const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend/buyerapp", "build")));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const productRouter = require("./routes/products");

app.use("/products", productRouter);
app.use((req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../frontend/buyerapp", "build", "index.html")
  );
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
