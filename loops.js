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

loop1(data);

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

loop2(data);

module.exports;
