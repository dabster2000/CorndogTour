exports.definition = {
    config: {
        adapter: {
            type: "rest",
            collection_name: "user",
            base_url: "http://corndogtourengine.cfapps.io/user/"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            idAttribute: "_id",
            success: function() {
                alert("User password " + res.password);
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("user_rest", exports.definition, []);

collection = Alloy.C("user_rest", exports.definition, model);

exports.Model = model;

exports.Collection = collection;