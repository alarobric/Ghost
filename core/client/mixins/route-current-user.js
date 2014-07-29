var currentUserMixin = Ember.Mixin.create({
    beforeModel: function () {
        var editorTarget = 'settings.users',
            self = this;
            
        //console.log('DEBUG: ' + this.routeName);
        if (this.routeName === 'settings.apps') {
            editorTarget = 'settings';
        } else if (this.routeName === 'settings.index' || this.routeName === 'settings.users') {
            editorTarget = '';
        }

        this.store.find('user', 'me').then(function (user) {
            if (user.get('isAuthor')) {
                self.transitionTo('settings.users.user', user);
                return;
            } else if (user.get('isEditor')) {
                if (editorTarget) {
                    //console.log('DEBUG: transition');
                    self.transitionTo(editorTarget);
                    return;
                }
            }
        });
    }
});

export default currentUserMixin;