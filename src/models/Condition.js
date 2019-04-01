import { attr, fk, Model } from 'redux-orm';
import composeReducer from '../utils/composeOrmReducer'

class Condition extends Model {
    static reducer = composeReducer('condition');
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