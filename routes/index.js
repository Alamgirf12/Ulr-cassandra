
var express = require('express');
var router = express.Router();
var _ = require('lodash');
var moment = require('moment');
var sha1 = require('sha1');
var session = require('express-session');
var flash = require('express-flash');
var {Ragistration,ExpressCassandra,models} = require('../Ragistration'); 
// var {Login,ExpressCassandra,models} = require('../Login'); 
/* GET home page. */
router.get('/', function(req, res, next) {
// var semail = req.session.email;
// var bemail = req.body.email;
// var sess   = (semail==semail);
var sess =   req.session.loggedin;
 	if(sess){
 		res.redirect('/view');
 	}
 	else{

  res.render('login', { title: 'Express' });
 	}
  // res.render('login', { title: 'Express' });
// }
// // else{
// 	res.redirect('/view');
// }
});
router.post('/reg', function(req,res,next){
	var firstname = req.body.firstname;
	var lastname  = req.body.lastname;
	var  email    = req.body.email;
	var  p        = req.body.password;
	     p = sha1(p);

	var created   = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
	if(p && email){

    models.instance.Ragistration.findOne({email:email}, {raw: true, allow_filtering: true}, function(err, results){   
	 		if(results){  
	 			req.flash('emailerrors', 'This email allready have  in Database');

	 			res.redirect('/');
				 

            }
            else{

      var data = new models.instance.Ragistration({firstname,lastname,email,password,created});
	  data.save();
	//  	if(!err){
	
	  req.flash('infoss', 'Successfully Registered');
    res.redirect('/');
  }
});
}

else{
	 req.flash('empty', 'Anyfield is empty');
    res.redirect('/');

}

})



router.get('/view', function(req, res, next) {
	// var sess = req.session.email;
	// if(sess)
	var sess =   req.session.loggedin;
 	if(!sess){
 		res.redirect('/');
 	}
 	else{
 res.render('index', { title: 'Express' });
 	}
// res.render('index', { title: 'Express' });
// else{
// 	 res.redirect('/')
// }

});



// router.post('/', function(req, res, next) {
// 	var email = req.body.email;
// 	var p = req.body.password;
// 	var password = sha1(p);
// 	if(email && password){
// 	models.instance.Ragistration.findOne({email:email,password:password}, function(err, people){     
// 	if(people.length >0){	 	
// 	res.render('edit', { people: people,
// 		add:'edit'});
// 	});	 
// });
// 	}


router.post('/', function(req, res, next) {

	var email = req.body.email;
	var p = req.body.password;
	var password = sha1(p);

	if(email && password){

		models.instance.Ragistration.findOne({email:email,password:password}, {raw: true, allow_filtering: true}, function(err, people){   
			if(people){ 
			 req.session.loggedin = true; 
			req.flash('info', 'Successfully Login');
			console.log(people);
	   		res.redirect('/view');

			}
			else

	{
		
		
			req.flash('lerr', 'Incorrect Email or Password' );

            res.redirect('/');
	}

	  	});

	}
	else {
		
			req.flash('emptyf', 'fill all  the input field');
			res.redirect('/');
	}
});
// router.post('/reg', function(req, res) {	 
	
// 		var firstname = req.body.firstname;
//      	var lastlname  = req.body.lastname;
// 		var email     =  req.body.email;
//        	var password = req.body.password;
// 	    var created = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
		
// 		var data = new models.instance.Subscribe({subid, name, web,created});		 
// 	data.save(function(err){
//     if(err) throw err;

// 	res.redirect('/sview');	
// });
// });






router.get('/logout', (req, res) => {

  req.session.destroy((err) => {

     res.redirect('/');
  });

})


module.exports = router;
