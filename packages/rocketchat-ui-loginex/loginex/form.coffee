import toastr from 'toastr'
import { HTTP } from 'meteor/http'




Template.loginExForm.events
	'submit #loginex-card': (event, instance) ->
		event.preventDefault()
		toastr.success t('We_have_sent_registration_email')
		loginApiUrl = RocketChat.settings.get('Accounts_loginex_api_url') or ""
		HTTP.call "GET",loginApiUrl,{},(error,result) ->
			if not result?
				console.log(error)
			else
				console.log(result)
				window.parent.postMessage({event: 'try-iframe-login'});

		return
