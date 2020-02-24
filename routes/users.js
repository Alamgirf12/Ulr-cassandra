
var express = require('express');
var router = express.Router();
var _ = require('lodash');
var moment = require('moment');
var sha1 = require('sha1');
var session = require('express-session');
var flash = require('express-flash');
var {Emailist,ExpressCassandra,models} = require('../Emailist'); 
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('email',{title:'email'})
});
router.post('/postss', function(req,res,next){
	
	var  email1    = req.body.email1;
	var  email2    = req.body.email2;


    

      var data = new models.instance.Emailist({email1,email2});
	  data.save();
	//  	if(!err){
	
	 req.flash('infoss', 'Successfully Inserted');
    res.redirect('/');
  
});

module.exports = router;
