var fs = require('fs')

fs.readFile('sample.txt',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
        var text = data.toString('utf-8')
        var buf = new Buffer(text,'utf-8')
        console.log(text)
        console.log(buf)
    }
})

var dd = fs.readFileSync('sample.txt','utf-8');
console.log(dd)
console.log('second')