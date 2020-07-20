const http = require("http");
const imageSize = require("image-size")
const fs = require('fs')

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", function (inputData) {
      body += inputData;

//check if file exists
// throw err if not
//return img properties - height/width/size

      const dimensions = imageSize('pink-clouds.png');
      const width = dimensions.width
      const height = dimensions.height

      const stats = fs.statSync('pink-clouds.png')
      const inKB = Math.round(stats["size"]/1000)
      
      body = `Image is ${width}px x ${height}px and ${inKB}KB.`
      
    }); 

    req.on("end", function(){
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(body);
  });
  }
});




server.listen(port, () => {
  console.log(`Node server running on port ${port}`);
});
