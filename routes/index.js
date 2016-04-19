var express = require('express');
var crypto = require('crypto');
var router = express.Router();
var password = '';
var token = 'ao88qi66dx87'; 
var app_id = 'wxb8a03d62cf155ac9';
var app_secret = '630fd5630429fdd8c307e523ab5077da';
var access_token = 'aQUGPhjmoRJMa1-hgqUHbzxs8fHUXElW7m6EXkCaw3h51-HnKwP3empDftYbHyMCcGakxsweH-g_yq-62Hzm35d5Eua1s3auolAY_EUNJYeZH64FrJ1cxZ0dBLwiSNWXNYNgAGAVGV';

router.get('/', function(req, res, next) {
   var signature = req.query.signature;
   var timestamp = req.query.timestamp;
   var nonce = req.query.nonce;
   var echostr = req.query.echostr;
   console.log(signature);
   console.log(timestamp);
   console.log(nonce);
   console.log(echostr);


   var array = new Array(token,timestamp,nonce);
   array.sort();
   var str = array.toString().replace(/,/g,'');

   var sha1Code = crypto.createHash("sha1");
   var code = sha1Code.update(str,'utf-8').digest("hex");

   if(code===signature){
      console.log('success');
      res.send(echostr);
   }else{
      res.send("error");
   }
});
module.exports = router;