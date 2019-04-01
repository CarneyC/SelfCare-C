import { attr, many, Model } from 'redux-orm';
import composeReducer from '../utils/composeOrmReducer'

class Behavior extends Model {
    static reducer = composeReducer('behavior');
}

Behavior.modelName = 'Behavior';
Behavior.fields = {
    id: attr(),
    name: attr(),
    details: attr(),
    conditions: many('Condition'),
};

export default Behavior;