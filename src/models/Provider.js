import { attr, Model } from 'redux-orm';
import composeReducer from '../utils/composeReducer';

class Provider extends Model {
    static reducer = composeReducer('provider');
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