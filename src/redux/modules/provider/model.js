import { attr, Model } from 'redux-orm';
import createOrmReducer from '../../utils/createOrmReducer';
import types from './types';

class Provider extends Model {
    static reducer = createOrmReducer('provider', types);
}

Provider.modelName = 'Provider';
Provider.fields = {
    id: attr(),
    name: attr(),
    address: attr(),
    phone: attr(),
    first_visit: attr(),
    notes: attr(),
    updated_at: attr(),
};

export default Provider;