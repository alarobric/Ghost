var CurrentUserSettings = Ember.Mixin.create({
	currentUser: function() {
		return this.store.find('user', 'me');
	},

	transitionAuthor: function(user) {
		if (user.get('isAuthor')) {
			return this.transitionTo('settings.users.user', user);
		}

		return user;
	},

	transitionEditor: function(user) {
		if (user.get('isEditor')) {
			return this.transitionTo('settings.users');
		}

		return user;
	}
});

export default CurrentUserSettings;