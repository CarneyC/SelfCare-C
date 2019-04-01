import { attr, fk, Model } from 'redux-orm';
import createOrmReducer from '../../utils/createOrmReducer'
import types from './types';

class Medication extends Model {
    static reducer = createOrmReducer('medication', types);
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