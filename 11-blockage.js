const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Home Page");
      break;
    case "/about":
      setTimeout(() => {
        for (let i = 0; i < 1000; i++) {
          for (j = 0; j < 1000; j++) {
            console.log(`${i} ${j}`);
          }
        }
      }, 0);

      break;
    default:
      res.end("404");
      break;
  }
});

server.listen(42069, () => {
  console.log("server is listening on part 42096");
});
