import currentUserMixin from 'ghost/mixins/route-current-user';

var AppsRoute = Ember.Route.extend(SimpleAuth.AuthenticatedRouteMixin, currentUserMixin, {
    beforeModel: function () {
        if (!this.get('config.apps')) {
            this.transitionTo('settings.general');
            return;
        }

        this._super();
    },
    
    model: function () {
        return this.store.find('app');
    }
});

export default AppsRoute;
