const data = require('./data')

data.forEach(function (obj) {
  try {
    console.log(JSON.parse(obj.value));
  } catch (error) {
    console.log('error')
  }
});

