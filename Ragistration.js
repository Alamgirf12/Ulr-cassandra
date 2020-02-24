
var  {ExpressCassandra,models} = require("./condb.js");

var Ragistration = models.loadSchema('Ragistration', {
    fields:{
        uid: {
            type: "uuid",
            default: {"$db_function": "uuid()"}
        },
        // default: {"$db_function": "uuid()"}
        firstname: "text",
        lastname : "text",
        email    : "text",
        password : "text",
        created : {
            type: "timestamp"
 
        }
    },
  
     key : ["uid"]
});





Ragistration.syncDB(function(err, result) {
    if (!err){
      console.log("Hurrah! My Database has benn successfully connected to my codding")
    }    
});


module.exports = {ExpressCassandra,Ragistration,models};