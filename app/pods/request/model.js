import Model, { attr, belongsTo } from '@ember-data/model';

export default class RequestModel extends Model {
  @attr('string') name;
  @attr('string') surname;
  @attr('string') zipCode;
  @attr('string') city;
  @attr('string') phoneNumber;
  @attr('string') street;
  @attr('boolean') processed;
  @attr('date') schedule;
  @attr('number') houseMembersCount;
  @attr('number') number;
  @attr('number') subnumber;

  @belongsTo('visit') visits;
}
