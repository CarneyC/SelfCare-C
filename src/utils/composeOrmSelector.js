import { createSelector } from 'redux-orm';
import { orm } from '../models';

export default (modelName, normalized = false) => createSelector(
    orm,
    state => state.orm,
    (session) => {
        const refs = session[modelName].all().toRefArray();
        return normalized ? refs.reduce((obj, ref) => ({ ...obj, [ref.id]: ref }), {}) : refs;
    }
);

