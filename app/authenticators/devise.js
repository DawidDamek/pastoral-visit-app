// app/authenticators/oauth2.js
import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';

export default class CustomDeviseAuthenticator extends DeviseAuthenticator {
  // async authenticate(email, password) {
  //   let res = await fetch('http://localhost:3000/users/sign_in', {
  //     method: 'POST',
  //     body: JSON.stringify({ user: { email, password } }),
  //   });
  //   console.log(res);
  //   if (res.ok) {
  //     console.log(res);
  //     return res.json();
  //   } else {
  //     console.log('error');
  //   }
  // }
  serverTokenEndpoint = 'http://localhost:3000/users/sign_in';
}
