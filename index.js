const app = require('./main');

var port = 6606;
app.listen(port,function(){
console.log('server starts in ' + port);
})