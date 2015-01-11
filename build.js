({
	baseUrl: "scripts",
	dir: "prod",
	paths: {
		jquery: "vendor/jquery.min"
	},
	modules: [
		{
			name: "template"
		},
		{
			name: "app/index"
		},
		{
			name: "app/about"
		}
	],
	onBuildWrite: function (moduleName, path, contents) {
		// This is where the magic happens:
		/// append ";require(["moduleName"]);" to all entry modules
		// - this has the same result as adding insertRequire["moduleName"] to all modules
		for (var i = 0, len = config.modules.length; i < len; i++) {
			if(config.modules[i].name === moduleName){
				return  contents + ";require([\""+moduleName+"\"]);"
			};
		}
		return contents
	},
})