//var user_rest = require('user_rest');

var USERNAME = 'user', PASSWORD = 'password', AUTHKEY = 'somelongauthkeyforvalidation';

exports.definition = {
	config : {
		"columns" : {
			"username" : "text primary key",
			"password" : "text",
			"teamname" : "text",
			"bikers" : "text",
			"loggedIn" : "integer",
			"loggedInSince" : "text",
			"authKey" : "text"
		},
		"adapter" : {
			"collection_name" : "user",
			"idAttribute" : "username"
		}
	},

	extendModel : function(Model) {
		_.extend(Model.prototype, {
			login : function(username, password) {

				var user_rest = Alloy.createModel('user_rest', {
					_id : 'hans'
				});
				user_rest.fetch({
					success : function() {
						this.set({
							loggedIn : 1,
							loggedInSince : moment().format('YYYY-MM-DD HH:mm:ss.SSS'),
							authKey : AUTHKEY,
							teamname: res.teamname
						});
						return true;
					},
					error : function() {
						alert('error');
						return false;
					}
				});
			},
			logout : function() {
				this.set({
					loggedIn : 0,
					loggedInSince : '',
					authKey : ''
				});
			},
			validateAuth : function() {
				// Again, this would be done against an auth server in a real world
				// scenario. We're just keeping it simple here.
				if (this.get('loggedIn') === 1 && this.get('authKey') === AUTHKEY) {
					return true;
				} else {
					return false;
				}
			}
		});

		return Model;
	}
};
