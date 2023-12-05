import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class UserShowRoute extends Route {
  @service store;

  model({ id }) {
    return this.store.findRecord('user', id);
  }
}
