function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.signup = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "signup"
    });
    $.__views.signup && $.addTopLevelView($.__views.signup);
    $.__views.__alloyId5 = Ti.UI.createView({
        id: "__alloyId5"
    });
    $.__views.signup.add($.__views.__alloyId5);
    $.__views.header = Ti.UI.createLabel({
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        backgroundColor: "transparent",
        font: {
            fontFamily: "Helvetica",
            fontSize: "24dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Sign to Corndog Tour.",
        id: "header"
    });
    $.__views.__alloyId5.add($.__views.header);
    $.__views.username = Ti.UI.createTextField({
        id: "username",
        width: "250",
        hintText: "Username"
    });
    $.__views.__alloyId5.add($.__views.username);
    $.__views.password = Ti.UI.createTextField({
        id: "password",
        width: "250",
        hintText: "Password",
        passwordMask: "true"
    });
    $.__views.__alloyId5.add($.__views.password);
    $.__views.loginButton = Ti.UI.createButton({
        title: "Login",
        id: "loginButton"
    });
    $.__views.__alloyId5.add($.__views.loginButton);
    login ? $.__views.loginButton.addEventListener("click", login) : __defers["$.__views.loginButton!click!login"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.loginButton!click!login"] && $.__views.loginButton.addEventListener("click", login);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;