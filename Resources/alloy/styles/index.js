module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "Window",
    style: {
        backgroundColor: "white",
        layout: "vertical"
    }
}, {
    isApi: true,
    priority: 1000.0002,
    key: "Label",
    style: {
        color: "white",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        backgroundColor: "transparent",
        font: {
            fontFamily: "Helvetica",
            fontSize: "24dp",
            fontStyle: "normal",
            fontWeight: "normal"
        }
    }
}, {
    isApi: true,
    priority: 1000.0003,
    key: "TableView",
    style: {
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "24dp",
            fontStyle: "normal",
            fontWeight: "normal"
        }
    }
}, {
    isApi: true,
    priority: 1000.0004,
    key: "TableViewRow",
    style: {
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "24dp",
            fontStyle: "normal",
            fontWeight: "normal"
        }
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "container",
    style: {
        backgroundColor: "#79ad3b",
        layout: "vertical",
        title: "Corndog Login"
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "header",
    style: {
        top: 10,
        textAlign: "center",
        height: "auto",
        font: {
            fontSize: 28,
            fontweight: "bold"
        }
    }
}, {
    isId: true,
    priority: 100000.0009,
    key: "myTeamButton",
    style: {
        top: 10,
        width: 200,
        height: "auto"
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "teamListButton",
    style: {
        top: 10,
        width: 200,
        height: "auto"
    }
} ];