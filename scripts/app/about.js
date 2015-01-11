define(function(require){

	require("helpers/helper2");
	require("helpers/helper3");

	var Template = require("helpers/helper1");
	var $        = require("jquery");
	var body     = $("body");

		Template.text(body, "about.js");
		console.log("loaded: about.js")
});