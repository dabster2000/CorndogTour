module.exports = [ {
    isClass: true,
    priority: 10000.0004,
    key: "container",
    style: {
        backgroundColor: "#79ad3b",
        layout: "vertical",
        title: "Corndog Login"
    }
}, {
    isId: true,
    priority: 100000.0005,
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
    priority: 100000.0006,
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
    priority: 100000.0007,
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
    priority: 100000.0008,
    key: "loginButton",
    style: {
        top: 10,
        width: 200,
        height: "auto"
    }
} ];