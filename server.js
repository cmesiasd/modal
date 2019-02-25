var express = require('express');
var app = express();
const frameguard = require('frameguard')

// app.get('/', (req,res) => {
//     console.log("console2");
//     res.sendStatus(200);
// });
// app.use(frameguard({
//     action: 'allow-from',
//     domain: 'https://facebook.com https://www.messenger.com'}));

app.use(express.static('./public'));

app.get('/', (req,res) => {
    
    res.header('X-Frame-Options', 'ALLOW-FROM ' + 'https://www.facebook.com');
    res.sendFile('public/index.html' , { root : __dirname});
    console.log(res.headers);
});



app.listen(process.env.PORT, () =>{
    console.log('Running app listening on port 3000');
})