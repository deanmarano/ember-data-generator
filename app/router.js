import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('home', {path: '/'});
  this.resource('login-callback', {path: '/login/callback'});
  this.resource('login');
  this.resource('welcome');
  this.route('login-callback');
});
