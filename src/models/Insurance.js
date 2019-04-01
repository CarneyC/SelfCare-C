import { attr, fk, Model } from 'redux-orm';
import composeReducer from '../utils/composeOrmReducer'

class Insurance extends Model {
    static reducer = composeReducer('insurance');
}

Insurance.modelName = 'Insurance';
Insurance.fields = {
    id: attr(),
    name: attr(),
    address: attr(),
    phone: attr(),
    notes: attr(),
    created_at: attr(),
    updated_at: attr(),
    user_id: fk('User'),
};

export default Insurance;