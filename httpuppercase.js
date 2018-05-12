const http =require('http')
const map = require('through2-map')

http.createServer(function(req, res){
  if(req.method !== 'POST'){
    return res.end('no posts, Error')
  }
   const upperC = req.pipe(map(function(chunk){
    return chunk.toString().toUpperCase()
  }))//.pipe(res)
  upperC.pipe(res)
}).listen(Number(process.argv[2]))
