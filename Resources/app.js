var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var persistence = require("persistence");

persistence.setUsername("hans");

persistence.setPassword("1234");

Alloy.createController("index");