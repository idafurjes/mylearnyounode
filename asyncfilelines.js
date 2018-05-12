const fs = require('fs');
const path = process.argv[2];

fs.readFile(path, function(err, data){
  if(err) {
    return console.log(err);
  };
  let str = data.toString();
  let strArray = str.split('\n');
  console.log(strArray.length -1);
});

