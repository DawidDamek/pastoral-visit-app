import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PanelRoute extends Route {
  @service mySession;
  @service store;

  async beforeModel() {
    const currentUser = await this.store.findRecord('user', 1);
    this.mySession.currentUser = currentUser;
  }
}
