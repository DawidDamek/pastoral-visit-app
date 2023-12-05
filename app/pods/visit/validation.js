// validations/employee.js
import {
  validatePresence,
  validateLength,
  validateConfirmation,
  validateFormat,
} from 'ember-changeset-validations/validators';
import validateCustom from '../validators/custom'; // local validator
import validatePasswordStrength from '../validators/password-strength'; // local validator

export default {
  firstName: [validatePresence(true), validateLength({ min: 4 })],
  lastName: validatePresence(true),
  age: validateCustom({ foo: 'bar' }),
  email: validateFormat({ type: 'email' }),
  password: [
    validateLength({ min: 8 }),
    validatePasswordStrength({ minScore: 80 }),
  ],
  passwordConfirmation: validateConfirmation({ on: 'password' }),
};
