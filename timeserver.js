const net = require('net')

function addZeros(date){
  if(date < 10){
    date = '0'+date
  }
  return date
}
net.createServer(function(socket){
  date = new Date()
  year =date.getFullYear()
  month =addZeros(1+ date.getMonth())
  day = addZeros(date.getDate())
  hour = addZeros(date.getHours())
  minute = addZeros(date.getMinutes())
  dataTime = year+'-'+month+'-'+day+' '+hour+':'+minute+'\n';
  if(dataTime == ""){
    socket.end("")
  }else{
  socket.end(dataTime)
  }
}).listen(process.argv[2])
