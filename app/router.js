import EmberRouter from '@ember/routing/router';
import config from 'pastoral-visit-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('panel', function () {
    this.route('requests');
    this.route('request');
    this.route('visit');
    this.route('visits');
  });
  this.route('priest', function () {
    this.route('show', { path: '/:id' });
  });

  this.route('user', function () {
    this.route('show', { path: '/:id' });
  });
  this.route('main', { path: '/' });
  this.route('login');
  this.route('order');
});
