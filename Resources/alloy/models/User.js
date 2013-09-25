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
            idAttribute: "_id"
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