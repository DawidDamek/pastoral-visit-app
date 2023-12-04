import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') surname;
  @attr('string') email;
  @attr('string') descriiption;
  @attr('string') phoneNumber;
  @attr('string') degree;
  @attr('string') photoUrl;

  @hasMany('visit') visits;
}
