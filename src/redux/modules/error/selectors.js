import { createSelector } from 'redux-orm';
import { orm } from '../../models';

const ormSelector = state => state.orm;

const errorSelector = createSelector(
    orm,
    ormSelector,
    session => {
        if (session.Error.idExists(0))
            return session.Error.withId(0);
    }
);

export const authFailure = createSelector(
    orm,
    ormSelector,
    errorSelector,
    (session, error) => {
        return error ? error.auth_error : false;
    }
);

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const createErrorSelector = (fieldName) => createSelector(
    orm,
    ormSelector,
    errorSelector,
    (session, error) => {
        if (error && error.ref[fieldName]) {
            return Object
                .entries(error.ref[fieldName])
                .map(errors => capitalize(errors.join(' ')))
                .join(' / ').replace('_', ' ');
        }
        return false;
    }
);

export const providerError = createErrorSelector('provider_error');
export const insuranceError = createErrorSelector('insurance_error');
export const medicationError = createErrorSelector('medication_error');

