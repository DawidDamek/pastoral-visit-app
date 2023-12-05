import Component from '@glimmer/component';
import { action } from '@ember/object';

const CONST_FIELDS_SHEMA = {
  visit: {
    name: { path: 'text', propertyName: 'name' },
    surname: { path: 'text', propertyName: 'surname' },
    zipCode: { path: 'text', propertyName: 'zipCode' },
    city: { path: 'text', propertyName: 'city' },
    phoneNumber: { path: 'text', propertyName: 'phoneNumber' },
    photoUrl: { path: 'text', propertyName: 'photoUrl' },
    street: { path: 'text', propertyName: 'street' },
    status: { path: 'text', propertyName: 'status' },
    houseMembersCount: { path: 'number', propertyName: 'houseMembersCount' },
    number: { path: 'number', propertyName: 'number' },
    subnumber: { path: 'number', propertyName: 'subnumber' },
    shedule: { path: 'date', propertyName: 'schedule' },
  },
  request: {
    name: { path: 'text', propertyName: 'name' },
    surname: { path: 'text', propertyName: 'surname' },
    zipCode: { path: 'text', propertyName: 'zipCode' },
    city: { path: 'text', propertyName: 'city' },
    phoneNumber: { path: 'text', propertyName: 'phoneNumber' },
    photoUrl: { path: 'text', propertyName: 'photoUrl' },
    street: { path: 'text', propertyName: 'street' },
    processed: { path: 'boolean', propertyName: 'processed' },
    houseMembersCount: { path: 'number', propertyName: 'houseMembersCount' },
    number: { path: 'number', propertyName: 'number' },
    subnumber: { path: 'number', propertyName: 'subnumber' },
    shedule: { path: 'date', propertyName: 'schedule' },
  },
};

export default class FormComponent extends Component {
  get schemaFields() {
    const { model } = this.args;
    const schema = CONST_FIELDS_SHEMA[model];

    let preparedSchema = [];

    Object.keys(schema).forEach((key) => {
      let item = schema[key];
      preparedSchema.push({
        path: item.path,
        propertyName: item.propertyName,
      });
    });
    return preparedSchema;
  }

  @action
  onPropertyChange(key, { target: { value } }) {
    this.args.changeset.set(key, value);
  }

  @action
  onSave() {
    console.log(this.args.changeset);
  }
}
