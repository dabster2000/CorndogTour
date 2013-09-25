exports.definition = {  
    config: {
        "adapter": {
            "type": "rest",
            "collection_name": "user",
            // Endpoint URL to access the service for the REST sync adapter
			base_url: 'http://corndogtourengine.cfapps.io/user/'
        }
    },  
    extendModel: function(Model) {
		// Mongo uses _id as the model ID
		_.extend(Model.prototype, {
			idAttribute: '_id'
		});
		return Model;
	},
    extendCollection: function(Collection) {        
        _.extend(Collection.prototype, {});
        return Collection;
    }       
};


//var Net = require('net');
//var userName;

// exports.definition = {
	// config: {
// 
		// adapter: {
			// //type: "sql",
			// collection_name: "user"
		// }
	// },
	// extendModel: function(Model) {
		// _.extend(Model.prototype, {
			// login: function(username, password){
				// //TODO: Look up users via REST service
				// Net.download({
					// url: 'http://home.ernstlassen.dk:8080/CorndogTourEngine/user/',
					// success: function(success){
						// Ti.API.info(success);
						// return true;
					// },
					// error: function(error){
						// Ti.API.info(error);
// 						
					// }
// 					
				// });
			// },
			// signup: function(username, password){
				// //TODO: Add user via REST service
			// }
		// });
// 
		// return Model;
	// },
	// extendCollection: function(Collection) {
		// _.extend(Collection.prototype, {
			// // extended functions and properties go here
		// });
// 
		// return Collection;
	// }
// };


