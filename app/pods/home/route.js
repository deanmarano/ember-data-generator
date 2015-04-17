import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    console.log('hello');
    if(!this.get('session.isAuthenticated')) {
      this.transitionTo('welcome');
    }
  }
});
