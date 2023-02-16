// creating express server
const express = require("express");
const router = require("./src/students/routes");
const app = express();
require("dotenv").config();

// defining port
const PORT = 3000;

// add middleware globally
app.use(express.json());
app.use("/api/v1/students", router);

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello world" });
});

//  server listen
app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
