const express = require("express");
const app = express();
const cors = require("cors");

const data = {
  a: 1,
  x: 99,
};

app.use(
  cors({
    origin: "https://gleaming-liger-08730e.netlify.app/",
  })
);

app.get("/data", (req, res) => res.json(data));

app.listen(4000, () => console.log("cors-example listening on port 4000"));
