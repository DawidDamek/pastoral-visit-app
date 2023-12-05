import Controller from '@ember/controller';
import { service } from '@ember/service';
import { Changeset } from 'ember-changeset';

export default class PanelVisitsController extends Controller {
  @service store;

  constructor() {
    super(...arguments);

    const newVisit = this.store.createRecord('visit');
    this.visitChangeset = Changeset(newVisit);
  }
}
