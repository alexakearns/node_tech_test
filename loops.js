const data = require("./data");

const loop1 = (dataSet) => {
  dataSet.forEach(function (object) {
    tryCatch(object)
  });
};

const loop2 = (dataSet) => {
  for (let i = 0; i < dataSet.length; i++) {
    let object = dataSet[i];
    tryCatch(object)
  }
};

const loop3 = (dataSet) => {
  let count = 0;
  const total = dataSet.length;
  while (count < total) {
    let object = dataSet[count];
    tryCatch(object)
    count += 1;
  }
};

const loop4 = (dataSet) => {
  for (let object of dataSet) {
    tryCatch(object)
  }
};

const tryCatch = (obj) => {
  try {
    console.log(JSON.parse(obj.value));
  } catch (error) {
    console.log("error");
  }
}

loop1(data);
loop2(data);
loop3(data);
loop4(data);
module.exports;
