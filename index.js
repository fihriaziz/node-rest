const http = require("http");
const testModule = require("./testmodule");
const { faker } = require("@faker-js/faker");

const randomName = faker.name.findName();

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  const url = req.url;
  if (url === "/users") {
    res.end("Hello users");
  } else if (url === "/category") {
    res.end("Mobil");
  } else {
    res.end(randomName);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});