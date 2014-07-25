var SettingsUserRoute = Ember.Route.extend({
    model: function (params) {
        // TODO: Make custom user adapter that uses /api/users/:slug endpoint
        // return this.store.find('user', { slug: params.slug });

        // Instead, get all the users and then find by slug
        return this.store.find('user').then(function (result) {
            return result.findBy('slug', params.slug);
        });
    },

    afterModel: function (user) {
        var self = this;
        this.store.find('user', 'me').then(function (currentUser) {
            if (currentUser.get('isAuthor') && user.get('slug') !== currentUser.get('slug')) {
                //if an author, and user-slug is not their own, redirect to their profile
                self.transitionTo('settings.users.user', currentUser);
            } else if (currentUser.get('isEditor') && !user.get('isAuthor') &&
                       user.get('slug') !== currentUser.get('slug')) {
                //if an editor, and user-slug is not an author or their own, redirect to /settings/users/
                self.transitionTo('settings.users');
            }
        });
    },

    deactivate: function () {
        var model = this.modelFor('settings.users.user');

        // we want to revert any unsaved changes on exit
        if (model && model.get('isDirty')) {
            model.rollback();
        }

        this._super();
    }
});

export default SettingsUserRoute;
