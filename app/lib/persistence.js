exports.setUsername = function(username) {
	Titanium.App.Properties.setString("username", username);
};

exports.getUsername = function() {
	return Titanium.App.Properties.getString("username");
};

exports.setPassword = function(password) {
	Titanium.App.Properties.setString("password", password);
};

exports.getPassword = function() {
	return Titanium.App.Properties.getString("password");
};