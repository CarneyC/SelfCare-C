import { attr, many, Model } from 'redux-orm';
import types from './types';
import createOrmReducer from '../../utils/createOrmReducer';

class Behavior extends Model {
    static reducer = createOrmReducer('behavior', types);
}

Behavior.modelName = 'Behavior';
Behavior.fields = {
    id: attr(),
    name: attr(),
    details: attr(),
    conditions: many('Condition'),
};

export default Behavior;