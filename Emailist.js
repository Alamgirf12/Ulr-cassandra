
var  {ExpressCassandra,models} = require("./condb.js");

var Emailist = models.loadSchema('Emailist', {
    fields:{
        eid: {
            type: "uuid",
            default: {"$db_function": "uuid()"}
        },
        // default: {"$db_function": "uuid()"}
        email1: "text",
       
        email2: "text"
    

    },
  
     key : ["eid"]
});





Emailist.syncDB(function(err, result) {
    if (!err){
      console.log("Hurrah! My Database has benn successfully connected to my codding")
    }    
});


module.exports = {ExpressCassandra,Emailist,models};