import loadingIndicator from 'ghost/mixins/loading-indicator';

var SettingsGeneralRoute = Ember.Route.extend(SimpleAuth.AuthenticatedRouteMixin, loadingIndicator, {
    beforeModel: function () {
        var self = this;
        this.store.find('user', 'me').then(function (user) {
            if (user.get('isAuthor')) {
                self.transitionTo('settings.users.user', user);
            } else if (user.get('isEditor')) {
                self.transitionTo('settings.users');
            }
        });
    },

    model: function () {
        return this.store.find('setting', { type: 'blog,theme' }).then(function (records) {
            return records.get('firstObject');
        });
    }
});

export default SettingsGeneralRoute;
