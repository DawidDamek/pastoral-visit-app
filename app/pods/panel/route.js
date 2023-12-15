import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PanelRoute extends Route {
  @service session;
  @service store;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  model() {
    // fetch user
  }
}
