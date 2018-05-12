const http = require('http');
const url = process.argv[2]; 
 
http.get(url, function(response){
  let result = [];
  response.on('data', function(data){
    result.push(data); 
  }).on('end', function(){
    result = Buffer.concat(result).toString();
    let len = result.length;
    console.log(len);
    console.log(result);
  });
  response.on('error', console.error);
});
