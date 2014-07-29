import currentUserMixin from 'ghost/mixins/route-current-user';

var UsersRoute = Ember.Route.extend(SimpleAuth.AuthenticatedRouteMixin, currentUserMixin, {
    beforeModel: function () {
        this._super();
    }
});

export default UsersRoute;
