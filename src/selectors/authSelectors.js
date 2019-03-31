import { createSelector } from 'redux-orm';
import { orm } from '../models';

const ormSelector = state => state.orm;

const auth = createSelector(
    orm,
    ormSelector,
    session => {
        if (session.Auth.idExists(0))
            return session.Auth.withId(0);
    }
);

export const isAuthenticated = createSelector(
    orm,
    ormSelector,
    auth,
    (session, auth) => {
        if (auth)
            return auth.isAuthenticated;
    }
);

export default createSelector(
    orm,
    ormSelector,
    auth,
    (session, auth) => {
        if (auth && auth.currentUser)
            return auth.currentUser.ref;
    }
);

