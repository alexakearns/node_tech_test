const data = require("./data");

const loop1 = (dataSet) => {
  dataSet.forEach(function (obj) {
    try {
      console.log(JSON.parse(obj.value));
    } catch (error) {
      console.log("error");
    }
  });
};


const loop2 = (dataSet) => {
  for (let i = 0; i < dataSet.length; i++) {
    let object = dataSet[i];
    try {
      console.log(JSON.parse(object.value));
    } catch (error) {
      console.log("error");
    }
  }
};


const loop3 = (dataSet) => {
  let count = 0;
  const total = dataSet.length;
  while (count <= total) {
    let object = dataSet[count];
    try {
      console.log(JSON.parse(object.value));
    } catch (error) {
      console.log("error");
    }
    count += 1;
  }
};


// const loop4 = (dataSet) => {
//   for (let object in dataSet) {
//     try {
//       console.log(JSON.parse(object.value));
//     } catch (error) {
//       console.log("error");
//     }
    
//   }
// }

// loop1(data);
// loop2(data);
loop3(data);
loop4(data)
module.exports;
