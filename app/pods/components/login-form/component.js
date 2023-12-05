import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginFormComponent extends Component {
  @tracked credentials = { password: null, email: null };

  @action
  onPropertyChange(key, { target: { value } }) {
    this.credentials[key] = value;
    console.log(this.credentials[key]);
  }

  @action
  onLogin() {
    console.log('login');
  }
}
