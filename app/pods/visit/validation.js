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
  name: [validatePresence(true), validateLength({ min: 4 })],
  surname: [validatePresence(true), validateLength({ min: 4 })],
  zipCode: [validatePresence(true), validateLength({ min: 4 })],
  city: [validatePresence(true), validateLength({ min: 4 })],
  phoneNumber: [validatePresence(true), validateLength({ min: 4 })],
  degree: [validatePresence(true), validateLength({ min: 4 })],
  street: [validatePresence(true), validateLength({ min: 4 })],
  processed: [validatePresence(true), validateLength({ min: 4 })],
  schedule: [validatePresence(true), validateLength({ min: 4 })],
  houseMembersCount: [validatePresence(true), validateLength({ min: 4 })],
  number: [validatePresence(true), validateLength({ min: 4 })],
  subnumber: [validatePresence(true), validateLength({ min: 4 })],
  firstName: [validatePresence(true), validateLength({ min: 4 })],
};
