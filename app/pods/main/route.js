import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MainRoute extends Route {
  @service session;
  @service store;

  // async beforeModel() {
  //   const currentUser = await this.store.findRecord('user', 1);
  //   this.mySession.currentUser = currentUser;
  // }

  // beforeModel(transition) {
  // console.log(this.session.requireAuthentication);
  // console.log(transition);
  // this.session.requireAuthentication(transition, '/login');
  // }
}
