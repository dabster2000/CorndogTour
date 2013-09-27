var persistence = require('persistence');

var xhr_myteamlist = Ti.Network.createHTTPClient();
xhr_myteamlist.open('GET','http://corndogtourengine.cfapps.io/teams/search/findByUsernameContains?username=' + persistence.getUsername());
xhr_myteamlist.send();
	
xhr_myteamlist.onload = function(e) {
		
	var json = JSON.parse(this.responseText);
	var myteam = json.content[0];
	$.teamname.text = myteam.teamname;
	$.username.text = myteam.username;
	
};