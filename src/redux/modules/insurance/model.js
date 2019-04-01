import { attr, fk, Model } from 'redux-orm';
import createOrmReducer from '../../utils/createOrmReducer'
import types from './types';

class Insurance extends Model {
    static reducer = createOrmReducer('insurance', types);
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