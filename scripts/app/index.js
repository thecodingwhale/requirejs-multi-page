define(function(require){
	
	require("helpers/helper2");

	var Template = require("helpers/helper1");
	var $        = require("jquery");
	var body     = $("body");

		Template.text(body, "index.js");
		console.log("loaded: index.js")
});