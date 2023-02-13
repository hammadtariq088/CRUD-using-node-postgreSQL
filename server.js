// creating express server
const express = require("express");
const app = express();

// defining port
const PORT = 3000;

// add middleware globally
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello world" });
});

//  server listen
app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
