var xhr_teamslist = Ti.Network.createHTTPClient();
xhr_teamslist.open('GET','http://corndogtourengine.cfapps.io/teams');
xhr_teamslist.send();
	
xhr_teamslist.onload = function(e) {
	
	var json = JSON.parse(this.responseText);
	var teams = [];
	for (i = 0; i < json.content.length; i++) {
		var team = json.content[i];
		$.teamname.text = team.teamname;
		//teams.push({ title: team.teamname});
		//$.table.appendRow($.row);
	}
	//$.table.setData(teams);
};