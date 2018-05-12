let myModule = require('./mymodule');

const filePath = process.argv[2];
const fileExt = process.argv[3];

myModule(filePath, fileExt, function(err, data){
 for (i=0; i<data.length; i++){
  console.log(data[i]); 
 }  
})
