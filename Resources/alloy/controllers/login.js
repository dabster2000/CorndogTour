function Controller() {
    function login() {
        var user = Alloy.createModel("user");
        user.login($.username.value, $.password.value) && alert("User team " + user.get("teamname"));
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId10 = Ti.UI.createWindow({
        backgroundColor: "#eaedf1",
        layout: "vertical",
        title: "Login",
        id: "__alloyId10"
    });
    $.__views.__alloyId11 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.username = Ti.UI.createTextField({
        top: 10,
        width: "280",
        height: "52",
        keyboardType: Ti.UI.KEYBOARD_DEFAULT,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        id: "username",
        backgroundImage: "textfield-username.png",
        hintText: "Username",
        bottom: "1",
        autocorrect: "false",
        autocapitalization: "false",
        paddingLeft: "50"
    });
    $.__views.__alloyId11.add($.__views.username);
    $.__views.password = Ti.UI.createTextField({
        top: "1",
        width: "280",
        height: "52",
        keyboardType: Ti.UI.KEYBOARD_DEFAULT,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "password",
        backgroundImage: "textfield-password.png",
        hintText: "Password",
        passwordMask: "true",
        paddingLeft: "50"
    });
    $.__views.__alloyId11.add($.__views.password);
    $.__views.loginButton = Ti.UI.createButton({
        top: 10,
        width: "280",
        height: "50",
        title: "Login",
        id: "loginButton",
        backgroundImage: "button-large.png"
    });
    $.__views.__alloyId11.add($.__views.loginButton);
    login ? $.__views.loginButton.addEventListener("click", login) : __defers["$.__views.loginButton!click!login"] = true;
    $.__views.login = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId10,
        backgroundColor: "#323a45",
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.loginButton!click!login"] && $.__views.loginButton.addEventListener("click", login);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;