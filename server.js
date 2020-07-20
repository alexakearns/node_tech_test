const http = require("http");
const sizeOf = require("image-size");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", function (inputData) {
      body += inputData;

      //check if file exists
      // throw err if not
      //return img properties - height/width/size

      let dimensions = sizeOf(body);
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
