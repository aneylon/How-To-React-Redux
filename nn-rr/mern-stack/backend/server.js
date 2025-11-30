const express = require("express");
const port = 4242;

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "hey express!" });
});

app.listen(port, () => {
  console.log("listening on port : ", port);
});
