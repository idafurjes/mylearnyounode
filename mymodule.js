const fs = require('fs');
const path = require('path');

module.exports = function(filePath, fileExtension, callback){
  fs.readdir(filePath, function(err, data){
    if(err){
      return callback(err, null);
    }
    let res = [];
   for(i=0; i<data.length; i++){
      if(path.extname(data[i]) =='.'+ fileExtension){
        res.push(data[i]);
      }
   } 
   callback(null, res); 
  }); 
}

