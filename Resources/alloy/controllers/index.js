function Controller() {
    function myTeam_onClick() {
        Alloy.createController("myteam").getView().open({
            modal: true
        });
    }
    function teamList_onClick() {
        Alloy.createController("teams").getView().open({
            modal: true
        });
    }
    function login_onClick() {
        Alloy.createController("login").getView().open({});
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#79ad3b",
        layout: "vertical",
        title: "Corndog Login",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.header = Ti.UI.createLabel({
        color: "white",
        textAlign: "center",
        backgroundColor: "transparent",
        font: {
            fontSize: 28,
            fontweight: "bold"
        },
        top: 10,
        height: "auto",
        text: "Condog Tour iPhone",
        id: "header"
    });
    $.__views.index.add($.__views.header);
    $.__views.myTeamButton = Ti.UI.createButton({
        top: 10,
        width: 200,
        height: "auto",
        title: "My Team",
        id: "myTeamButton"
    });
    $.__views.index.add($.__views.myTeamButton);
    myTeam_onClick ? $.__views.myTeamButton.addEventListener("click", myTeam_onClick) : __defers["$.__views.myTeamButton!click!myTeam_onClick"] = true;
    $.__views.teamListButton = Ti.UI.createButton({
        top: 10,
        width: 200,
        height: "auto",
        title: "CT Team List",
        id: "teamListButton"
    });
    $.__views.index.add($.__views.teamListButton);
    teamList_onClick ? $.__views.teamListButton.addEventListener("click", teamList_onClick) : __defers["$.__views.teamListButton!click!teamList_onClick"] = true;
    $.__views.loginButton = Ti.UI.createButton({
        title: "Login",
        id: "loginButton"
    });
    $.__views.index.add($.__views.loginButton);
    login_onClick ? $.__views.loginButton.addEventListener("click", login_onClick) : __defers["$.__views.loginButton!click!login_onClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.myTeamButton!click!myTeam_onClick"] && $.__views.myTeamButton.addEventListener("click", myTeam_onClick);
    __defers["$.__views.teamListButton!click!teamList_onClick"] && $.__views.teamListButton.addEventListener("click", teamList_onClick);
    __defers["$.__views.loginButton!click!login_onClick"] && $.__views.loginButton.addEventListener("click", login_onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;