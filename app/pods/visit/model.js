import Model, { attr, belongsTo } from '@ember-data/model';

const StatusEnum = ['scheduled', 'completed', 'canceled'];

export default class VisitModel extends Model {
  @attr('string') name;
  @attr('string') surname;
  @attr('string') zipCode;
  @attr('string') city;
  @attr('string') phoneNumber;
  @attr('string') degree;
  @attr('string') photoUrl;
  @attr('string') street;
  @attr('date') schedule;
  @attr('string') status;
  @attr('number') houseMembersCount;
  @attr('string') phoneNumber;
  @attr('string') email;
  @attr('number') number;
  @attr('number') subnumber;

  @belongsTo('visit') visit;
  @belongsTo('user') user;
}

VisitModel.reopenClass({
  StatusEnum,
});

export { StatusEnum };
