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
			idAttribute: '_id',
			success: function(){
			alert('User password ' + res.password );
		},
		});
		return Model;
	},
    extendCollection: function(Collection) {        
        _.extend(Collection.prototype, {});
        return Collection;
    }       
};