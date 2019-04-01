import { attr, fk, Model } from 'redux-orm';
import createOrmReducer from '../../utils/createOrmReducer'
import types from './types';

class Condition extends Model {
    static reducer = createOrmReducer('condition', types);
}

Condition.modelName = 'Condition';
Condition.fields = {
    id: attr(),
    name: attr(),
    created_at: attr(),
    updated_at: attr(),
    behavior_id: fk('Behavior'),
};

export default Condition;