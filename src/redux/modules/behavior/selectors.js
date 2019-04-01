import { createSelector } from 'redux-orm';
import { orm } from '../../models';

export default createSelector(
    orm,
    state => state.orm,
    (session) => {
        return session.Behavior
            .all().toModelArray().map(model => {
                const conditions = model.conditions.toRefArray().map(ref => ref.id);
                return {
                    ...model.ref,
                    conditions
                };
            });
    }
);

