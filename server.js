const http = require("http");

const PORT = 4000;
const HOSTNAME = "localhost";

const requestListener = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/" && req.method === "GET") {
    getDetails(req, res);
  }
};

const getDetails = (req, res) => {
  res.writeHead(200); // Status code 200 = OK
  res.end(
    JSON.stringify({
      slackUsername: "Temitope Agbaje",
      backend: true,
      age: 23,
      bio: "I am a very friendly and cheerful person",
    })
  );

};

//Create the server
const server = http.createServer(requestListener);
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT} `);
});
