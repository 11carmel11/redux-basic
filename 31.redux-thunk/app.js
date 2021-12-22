const path = require("path");
const express = require("express");

const app = express();
app.use(express.static("build"));

const publicPath = path.join(__dirname, "..", "public");

const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log("Server is up!", port);
});
