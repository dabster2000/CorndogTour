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
    priority: 10000.0012,
    key: "container",
    style: {
        backgroundColor: "#79ad3b",
        layout: "vertical",
        title: "Corndog Login"
    }
}, {
    isId: true,
    priority: 100000.0013,
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
    priority: 100000.0014,
    key: "username",
    style: {
        top: 10,
        width: 200,
        height: "auto",
        keyboardType: Ti.UI.KEYBOARD_DEFAULT,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    }
}, {
    isId: true,
    priority: 100000.0015,
    key: "password",
    style: {
        top: 10,
        width: 200,
        height: "auto",
        keyboardType: Ti.UI.KEYBOARD_DEFAULT,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Ti.UI.RETURNKEY_DONE
    }
}, {
    isId: true,
    priority: 100000.0016,
    key: "loginButton",
    style: {
        top: 10,
        width: 200,
        height: "auto"
    }
} ];