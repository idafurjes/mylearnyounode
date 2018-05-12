const http = require('http')
const url = require('url')



http.createServer(function(req, res){
  parseUrl = url.parse(req.url, true)
  
  if (parseUrl.pathname == '/api/parsetime'){
    date = new Date(parseUrl.query.iso)
    hours = date.getHours()
    minutes = date.getMinutes()
    seconds = date.getSeconds()
    writeTime = { hour: hours, minute: minutes, second: seconds }
  }else if(parseUrl.pathname == '/api/unixtime'){
    dateISO = new Date(parseUrl.query.iso)
    writeTime = {unixtime: dateISO.getTime()}
  }else{
    res.writeHead(404)
    res.end('Error')
  }
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.write(JSON.stringify(writeTime))
  res.end()

}).listen(Number(process.argv[2]))
