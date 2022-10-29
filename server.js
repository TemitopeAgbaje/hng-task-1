const express = require("express");

const PORT = process.env.PORT || 4000;

const app = express();


app.get("/", async (req, res, next) => {
  return res.status(200).send({
    slackUsername: "Temitope Agbaje",
    backend: true,
    age: 23,
    bio: "I am a very friendly and cheerful person",
  });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
