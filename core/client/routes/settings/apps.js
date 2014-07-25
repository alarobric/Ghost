var AppsRoute = Ember.Route.extend(SimpleAuth.AuthenticatedRouteMixin, {
    beforeModel: function () {
        if (!this.get('config.apps')) {
            this.transitionTo('settings.general');
        }

        var self = this;
        this.store.find('user', 'me').then(function (user) {
            if (user.get('isAuthor')) {
                self.transitionTo('settings.users.user', user);
            } else if (user.get('isEditor')) {
                self.transitionTo('settings');
            }
        });
    },
    
    model: function () {
        return this.store.find('app');
    }
});

export default AppsRoute;
