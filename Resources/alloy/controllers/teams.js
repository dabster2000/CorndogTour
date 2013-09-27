function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "teams";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.teams = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "teams"
    });
    $.__views.teams && $.addTopLevelView($.__views.teams);
    $.__views.__alloyId6 = Ti.UI.createView({
        backgroundColor: "#79ad3b",
        layout: "vertical",
        title: "Corndog Teams",
        id: "__alloyId6"
    });
    $.__views.teams.add($.__views.__alloyId6);
    $.__views.row = Ti.UI.createTableViewRow({
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "24dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "row"
    });
    var __alloyId7 = [];
    __alloyId7.push($.__views.row);
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
    $.__views.row.add($.__views.teamname);
    $.__views.table = Ti.UI.createTableView({
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "24dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        data: __alloyId7,
        id: "table",
        headerTitle: "Teams"
    });
    $.__views.__alloyId6.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var xhr_teamslist = Ti.Network.createHTTPClient();
    xhr_teamslist.open("GET", "http://corndogtourengine.cfapps.io/teams");
    xhr_teamslist.send();
    xhr_teamslist.onload = function() {
        var json = JSON.parse(this.responseText);
        for (i = 0; json.content.length > i; i++) {
            var team = json.content[i];
            $.teamname.text = team.teamname;
        }
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;