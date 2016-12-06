Meteor.startup(function() {
	RocketChat.settings.addGroup('Accounts', function() {
		this.section('Iframe', function() {

			this.add('Accounts_loginex_api_url', '', { type: 'string', public: true });

		});
	});
});
