import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class OrderController extends Controller {
  @service store;
  @service router;

  @action
  async onSave() {
    console.log('args on save');
    this.router.transitionTo('panel.requests');
  }
}
