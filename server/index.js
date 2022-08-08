const express = require("express");
require("dotenv").config();
const path = require("path");

const port = process.env.PORT || 5000;
const app = express();

if (true) {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    )
  );
}

app.listen(port, () => console.log(`Server started on port ${port}`));
