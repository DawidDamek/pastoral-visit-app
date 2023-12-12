import Component from '@glimmer/component';
import { action } from '@ember/object';
import { Changeset } from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import requestValidator from '../../../request/validations';

const CONST_FIELDS_SHEMA = {
  visit: {
    name: { path: 'text', propertyName: 'name' },
    surname: { path: 'text', propertyName: 'surname' },
    zipCode: { path: 'text', propertyName: 'zipCode' },
    city: { path: 'text', propertyName: 'city' },
    phoneNumber: { path: 'text', propertyName: 'phoneNumber' },
    street: { path: 'text', propertyName: 'street' },
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
    street: { path: 'text', propertyName: 'street' },
    houseMembersCount: { path: 'number', propertyName: 'houseMembersCount' },
    number: { path: 'number', propertyName: 'number' },
    subnumber: { path: 'number', propertyName: 'subnumber' },
    shedule: { path: 'date', propertyName: 'schedule' },
  },
};

export default class FormComponent extends Component {
  constructor() {
    super(...arguments);
    this.changeset = Changeset(
      this.args.model,
      lookupValidator(requestValidator),
      requestValidator
    );
  }

  willDestroy() {
    const { model } = this.args;

    if (model.isNew) {
      model.destroyRecord();
    }
    super.willDestroy(...arguments);
  }

  get schemaFields() {
    const { modelType } = this.args;
    const schema = CONST_FIELDS_SHEMA[modelType];

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
    this.changeset.set(key, value);
  }

  @action
  async onSave(event) {
    event.preventDefault();
    const {
      changeset,
      args: { onSave },
    } = this;

    changeset.validate();

    if (!changeset.errors.length) {
      console.log('onSave');
      await changeset.save();
      if (!changeset.isDirty) {
        onSave?.();
      }
    }
    console.log(changeset);
  }
}
