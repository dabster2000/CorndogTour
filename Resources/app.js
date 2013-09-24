var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Models.user = Alloy.createModel("user");

Alloy.Models.user.fetch();

Alloy.createController("index");