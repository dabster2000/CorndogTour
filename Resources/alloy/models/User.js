var USERNAME = "user", PASSWORD = "password", AUTHKEY = "somelongauthkeyforvalidation";

exports.definition = {
    config: {
        columns: {
            username: "text primary key",
            password: "text",
            teamname: "text",
            bikers: "text",
            loggedIn: "integer",
            loggedInSince: "text",
            authKey: "text"
        },
        adapter: {
            collection_name: "user",
            idAttribute: "username"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            login: function() {
                var user_rest = Alloy.createModel("user_rest", {
                    _id: "hans"
                });
                user_rest.fetch({
                    success: function() {
                        this.set({
                            loggedIn: 1,
                            loggedInSince: moment().format("YYYY-MM-DD HH:mm:ss.SSS"),
                            authKey: AUTHKEY,
                            teamname: res.teamname
                        });
                        return true;
                    },
                    error: function() {
                        alert("error");
                        return false;
                    }
                });
            },
            logout: function() {
                this.set({
                    loggedIn: 0,
                    loggedInSince: "",
                    authKey: ""
                });
            },
            validateAuth: function() {
                return 1 === this.get("loggedIn") && this.get("authKey") === AUTHKEY ? true : false;
            }
        });
        return Model;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("user", exports.definition, []);

collection = Alloy.C("user", exports.definition, model);

exports.Model = model;

exports.Collection = collection;