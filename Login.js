
// var  {ExpressCassandra,models} = require("./condb.js");

// var Login = models.loadSchema('Login', {
//     fields:{
//         uid: {
//             type: "uuid",
//             default: {"$db_function": "uuid()"}
//         },
//         // default: {"$db_function": "uuid()"}
        
//         uname    : "text",
        
//         password : "text"
//         // created : {
//         //     type: "timestamp"
 
//         // }
//     },
  
//      key : ["uid"]
// });





// Login.syncDB(function(err, result) {
//     if (!err){
//       console.log("Hurrah! Login model connected");
//     }    
// });


// module.exports = {ExpressCassandra,Login,models};