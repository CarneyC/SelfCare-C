import { createSelector } from 'redux-orm';
import { orm } from '../models';

const ormSelector = state => state.orm;

export default createSelector(
    orm,
    ormSelector,
    (session) => {
        return session.Insurance.all().toRefArray();
    }
);

