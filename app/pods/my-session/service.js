import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MySessionService extends Service {
  @tracked currentUser;
}
