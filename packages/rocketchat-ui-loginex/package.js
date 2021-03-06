Package.describe({
	name: 'rocketchat:ui-loginex',
	version: '0.1.0',
	// Brief, one-line summary of the package.
	summary: '',
	// URL to the Git repository containing the source code for this package.
	git: '',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.use([
		'ecmascript',
		'templating',
		'coffeescript',
		'underscore',
		'rocketchat:lib',
		'rocketchat:assets',
		'sha'
	]);


		api.addFiles('loginex/loginex_rocketchat.js', 'server');


		api.addFiles('loginex/header.html', 'client');
	  api.addFiles('loginex/footer.html', 'client');
		api.addFiles('loginex/form.html', 'client');
		api.addFiles('loginex/form.coffee', 'client');
		api.addFiles('loginex/loginex.html', 'client');
	  api.addFiles('loginex/loginex.js', 'client');
		api.addFiles('loginex/loginex.coffee', 'client');


});
