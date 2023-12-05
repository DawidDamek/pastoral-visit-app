import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class MainRoute extends Route {
  @service session;
  @service store;

  async beforeModel() {
    const currentUser = await this.store.findRecord('user', 1);
    this.session.currentUser = currentUser;
  }
}
