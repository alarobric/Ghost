import CurrentUserSettings from 'ghost/mixins/current-user-settings';

var AppsRoute = Ember.Route.extend(SimpleAuth.AuthenticatedRouteMixin, CurrentUserSettings, {
    beforeModel: function () {
        if (!this.get('config.apps')) {
            return this.transitionTo('settings.general');
        }

        return this.currentUser()
            .then(this.transitionAuthor.bind(this))
            .then(this.transitionEditor.bind(this));
    },
    
    model: function () {
        return this.store.find('app');
    }
});

export default AppsRoute;
