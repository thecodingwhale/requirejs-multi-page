define(["jquery"], function($){
	console.log('loaded: helper1.js');

	return {
		text: function(element, string) {
			element.append("<h1>"+ string +"</h1>");
		}
	}
});