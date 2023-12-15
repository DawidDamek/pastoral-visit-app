// app/authenticators/oauth2.js
import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';

export default class CustomDeviseAuthenticator extends DeviseAuthenticator {
  serverTokenEndpoint = 'http://localhost:3000/users/sign_in';
}
