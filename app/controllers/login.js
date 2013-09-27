//var user = Alloy.createModel('user', {username:'hans'});
//var user = Alloy.createModel('user');

function login(e){
	var user = Alloy.createModel('user');
	if(user.login($.username.value, $.password.value))
	{
		alert('User team ' + user.get('teamname'));
	}
	
	// var user = Alloy.createModel('user', {_id: 'hans'});
	// user.fetch({
		// success: function(){
			// alert('User password ' + res.password );
		// },
		// error: function(){
			// alert('error');
		// }
// 		
	// });
	//var username = Alloy.Models.user.get('username');
	//alert(user.get('username'));
	
	//if(user.login($.username.value, $.password.value))
	//user.fetch({
	//	success: function(){
			
	//		alert('Yes');	
	//	},
	//	error: function(){
	//		Ti.API.error("Error - REST service get user");
	//	}
	
	//});
		
}
