var UsersRoute = Ember.Route.extend(SimpleAuth.AuthenticatedRouteMixin, {
    beforeModel: function () {
        var self = this;
        this.store.find('user', 'me').then(function (user) {
            if (user.get('isAuthor')) {
                self.transitionTo('settings.users.user', user);
            }
        });
    }
});

export default UsersRoute;
