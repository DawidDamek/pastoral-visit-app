import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PanelVisitsRoute extends Route {
  @service infinity;

  model() {
    return this.infinity.model('visit', {
      perPage: 1,
      startingPage: 1,
      perPageParam: 'page[size]',
      pageParam: 'page[number]',
      totalPagesParam: 'meta.total-pages',
      countParam: 'meta.total;',
    });
  }
}
