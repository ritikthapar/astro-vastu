var express = require('express');

let port=process.env.PORT || 3000

var app=express();

app.set('view engine','ejs')
app.use(express.static('./public'))

app.get('/',function(req,res){
    res.render('main')
})

app.listen(port,function(){
    console.log('you are listen to port 3000');
});
 