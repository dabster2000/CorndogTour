var Net = require("net");

var userName;

exports.definition = {
    config: {
        adapter: {
            collection_name: "user"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            login: function() {
                Net.download({
                    url: "http://home.ernstlassen.dk:8080/CorndogTourEngine/user/",
                    success: function(success) {
                        Ti.API.info(success);
                        return true;
                    },
                    error: function(error) {
                        Ti.API.info(error);
                    }
                });
            },
            signup: function() {}
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("user", exports.definition, []);

collection = Alloy.C("user", exports.definition, model);

exports.Model = model;

exports.Collection = collection;