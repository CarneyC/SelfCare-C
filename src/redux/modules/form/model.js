import { attr, oneToOne, Model } from 'redux-orm';
import types from './types';


// intercept every failure action

class Form extends Model {
    static reducer(action, Form, session) {
        switch (action.type) {
            case types.ADDING_MEDICATION:
               Form.upsert({
                   id: 0,
                   adding_medication: action.status
               });
               break;
            case types.EDITING_MEDICATION:
                Form.upsert({
                    id: 0,
                    editing_medication: action.id
                });
                break;

            case types.ADDING_INSURANCE:
                Form.upsert({
                    id: 0,
                    adding_insurance: action.status
                });
                break;
            case types.EDITING_INSURANCE:
                Form.upsert({
                    id: 0,
                    editing_insurance: action.id
                });
                break;

            case types.ADDING_PROVIDER:
                Form.upsert({
                    id: 0,
                    adding_provider: action.status
                });
                break;
            case types.EDITING_PROVIDER:
                Form.upsert({
                    id: 0,
                    editing_provider: action.id
                });
                break;

        }
    }
}

Form.modelName = 'Form';
Form.fields = {
    id: attr(),
    adding_medication: attr(),
    editing_medication: oneToOne('Medication'),
    adding_insurance: attr(),
    editing_insurance: oneToOne('Insurance'),
    adding_provider: attr(),
    editing_provider: oneToOne('Provider'),
};

export default Form;