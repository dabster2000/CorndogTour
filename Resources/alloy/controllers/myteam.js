function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "myteam";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.myteam = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "myteam"
    });
    $.__views.myteam && $.addTopLevelView($.__views.myteam);
    $.__views.__alloyId3 = Ti.UI.createView({
        backgroundColor: "#79ad3b",
        layout: "vertical",
        title: "My Corndog Teams",
        id: "__alloyId3"
    });
    $.__views.myteam.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        backgroundColor: "transparent",
        font: {
            fontFamily: "Helvetica",
            fontSize: "24dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "My Team Name",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.teamname = Ti.UI.createLabel({
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        backgroundColor: "transparent",
        font: {
            fontFamily: "Helvetica",
            fontSize: "24dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "teamname"
    });
    $.__views.__alloyId3.add($.__views.teamname);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        backgroundColor: "transparent",
        font: {
            fontFamily: "Helvetica",
            fontSize: "24dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "My User Name",
        id: "__alloyId5"
    });
    $.__views.__alloyId3.add($.__views.__alloyId5);
    $.__views.username = Ti.UI.createLabel({
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        backgroundColor: "transparent",
        font: {
            fontFamily: "Helvetica",
            fontSize: "24dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "username"
    });
    $.__views.__alloyId3.add($.__views.username);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var persistence = require("persistence");
    var xhr_myteamlist = Ti.Network.createHTTPClient();
    xhr_myteamlist.open("GET", "http://corndogtourengine.cfapps.io/teams/search/findByUsernameContains?username=" + persistence.getUsername());
    xhr_myteamlist.send();
    xhr_myteamlist.onload = function() {
        var json = JSON.parse(this.responseText);
        var myteam = json.content[0];
        $.teamname.text = myteam.teamname;
        $.username.text = myteam.username;
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;