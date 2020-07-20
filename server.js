const http = require("http");
const imgSize = require("image-size");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", function (inputData) {
      body += inputData;

      let dimensions = imgSize(body);
      let width = dimensions.width;
      let height = dimensions.height;

      let stats = fs.statSync(body);
      let inKiloBites = Math.round(stats["size"] / 1000);

      body = JSON.stringify({
        width: width,
        height: height,
        size_KB: inKiloBites,
      });
    });

    req.on("end", function () {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(body);
    });
  }
});

server.listen(port, () => {
  console.log(`Node server running on port ${port}`);
});
