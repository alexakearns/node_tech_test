const data = require("./data");
// const server = require('./server')
const http = require('http');



const loop1 = (dataSet) => {
  dataSet.forEach(function (object) {
    processData(object);
  });
}
  
  
  const loop2 = (dataSet) => {
    for (let i = 0; i < dataSet.length; i++) {
    let object = dataSet[i];
    processData(object)
  }
};

const loop3 = (dataSet) => {
  let count = 0;
  const total = dataSet.length;
  while (count < total) {
    let object = dataSet[count];
    processData(object)
    count += 1;
  }
};

const loop4 = (dataSet) => {
  for (let object of dataSet) {
    processData(object)
  }
};

const processData = (obj) => {
  try {
    let objVal = JSON.parse(obj.value);
    let image = objVal.img;

    let body = image

        let options = {
        hostname: "localhost",
        port: 3000,
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
          "Content-Length": Buffer.byteLength(body)
        }
      }
      
      let data = ""
      http
      .request(options, res => {
          res.on("data", d => {
            data += d
          })
          res.on("end", () => {
            console.log(data)
          })
        })
        .on("error", console.error)
        .end(body)
        
        let imgInfo = JSON.parse(data)
        console.log(`Image ${image} is ${imgInfo.width}px x ${imgInfo.height}px and ${imgInfo.size_KB}KB.`)

  } catch (error) {
    console.log("error");
  };
}

loop1(data);
// loop2(data);
// loop3(data);
// loop4(data);




module.exports;
