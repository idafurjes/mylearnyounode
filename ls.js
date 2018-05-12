const fs = require('fs');
const path = require('path');
const filePath = process.argv[2];
const ext = process.argv[3];

fs.readdir(filePath, function(err, data){
  if (err){
    return console.log(err);
  }
  for (i=0; i<data.length; i++){
    if(path.extname(data[i]) == '.'+ ext){
      console.log(data[i]);
    }
  }
})



