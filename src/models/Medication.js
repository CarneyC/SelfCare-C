import { attr, fk, Model } from 'redux-orm';
import composeReducer from '../utils/composeReducer'

class Medication extends Model {
    static reducer = composeReducer('medication');
}

Medication.modelName = 'Medication';
Medication.fields = {
    id: attr(),
    name: attr(),
    dose: attr(),
    prescribed: attr(),
    first_dose: attr(),
    notes: attr(),
    created_at: attr(),
    updated_at: attr(),
    user_id: fk('User'),
    like: attr(),
};

export default Medication;