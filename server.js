const http = require("http");


const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", function (inputData) {
      body += inputData;

//check if file exists
// throw err if not
//return img properties - height/width/size


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
