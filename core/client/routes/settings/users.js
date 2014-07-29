import CurrentUserSettings from 'ghost/mixins/current-user-settings';

var UsersRoute = Ember.Route.extend(SimpleAuth.AuthenticatedRouteMixin, CurrentUserSettings, {
    beforeModel: function () {
        return this.currentUser()
        	.then(this.transitionAuthor.bind(this));
    }
});

export default UsersRoute;
