const http = require('http')
const urlArr = [process.argv[2], process.argv[3], process.argv[4]]

function httpGet(url, n){
  let resultArr = []
  for(i=0; i<n; i++){
    http.get(url[i], function(response){
      let result = []
      response.on('data', function(data){
        result.push(data)
      }).on('end', function(){
        result = Buffer.concat(result).toString()
        resultArr.push(result)
      })
      response.on('error', console.error)
    })
  }
}

httpGet(urlArr, 3)

