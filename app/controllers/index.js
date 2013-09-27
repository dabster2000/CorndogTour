//Alloy.createController('login').getView().open();

function myTeam_onClick(e){
	var teams = Alloy.createController('myteam').getView().open({modal : true}); //Used model for Android back button support
}

function teamList_onClick(e){
	var teams = Alloy.createController('teams').getView().open({modal : true}); //Used model for Android back button support
}

function login_onClick(e){
	var teams = Alloy.createController('login').getView().open({}); //Used model for Android back button support
}


$.index.open();


