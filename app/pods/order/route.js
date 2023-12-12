import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class OrderRoute extends Route {
  @service store;

  model() {
    const request = this.store.createRecord('request');
    console.log('request', request);
    return request;
  }
}
