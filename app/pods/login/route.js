import Ember from 'ember';
/* global $ */

export default Ember.Route.extend({
  beforeModel:function() {
    window.location.replace(
        'https://github.com/login/oauth/authorize?' + $.param({
      client_id: '95022b2412e84c07ccd7',
      scope: 'gist',
      response_type: 'token'
  }));
  },
  actions: {
    authenticate: function() {
      var data = this.getProperties('identification', 'password');
      return this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', data);
    }
  }
});
