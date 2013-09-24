function Controller() {
    function login() {
        alert("Yes");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.login = Ti.UI.createWindow({
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.__alloyId2 = Ti.UI.createView({
        backgroundColor: "#79ad3b",
        layout: "vertical",
        title: "Corndog Login",
        id: "__alloyId2"
    });
    $.__views.login.add($.__views.__alloyId2);
    $.__views.header = Ti.UI.createLabel({
        top: 10,
        textAlign: "center",
        height: "auto",
        font: {
            fontSize: 28,
            fontweight: "bold"
        },
        text: "Login to Corndog Tour.",
        id: "header"
    });
    $.__views.__alloyId2.add($.__views.header);
    $.__views.username = Ti.UI.createTextField({
        top: 10,
        width: "250",
        height: "auto",
        keyboardType: Ti.UI.KEYBOARD_DEFAULT,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "username",
        hintText: "Username"
    });
    $.__views.__alloyId2.add($.__views.username);
    $.__views.password = Ti.UI.createTextField({
        top: 10,
        width: "250",
        height: "auto",
        keyboardType: Ti.UI.KEYBOARD_DEFAULT,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "password",
        hintText: "Password",
        passwordMask: "true"
    });
    $.__views.__alloyId2.add($.__views.password);
    $.__views.loginButton = Ti.UI.createButton({
        top: 10,
        width: 200,
        height: "auto",
        title: "Login",
        id: "loginButton"
    });
    $.__views.__alloyId2.add($.__views.loginButton);
    login ? $.__views.loginButton.addEventListener("click", login) : __defers["$.__views.loginButton!click!login"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.loginButton!click!login"] && $.__views.loginButton.addEventListener("click", login);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;