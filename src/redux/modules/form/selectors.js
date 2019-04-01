import { createSelector } from 'redux-orm';
import { orm } from '../../models';

const ormSelector = state => state.orm;

const formSelector = createSelector(
    orm,
    ormSelector,
    session => {
        if (session.Form.idExists(0))
            return session.Form.withId(0);
    }
);


const createAddingSelector = (fieldName) => createSelector(
    orm,
    ormSelector,
    formSelector,
    (session, form) => {
        return form && form.ref[fieldName] ? form.ref[fieldName] : false;
    }
);

const createEditingSelector = (fieldName) => createSelector(
    orm,
    ormSelector,
    formSelector,
    (session, form) => {
        return form && form[fieldName] ? form[fieldName].ref : false;
    }
);

export const addingMed = createAddingSelector('adding_medication');
export const editingMed = createEditingSelector('editing_medication');
export const addingIns = createAddingSelector('adding_insurance');
export const editingIns = createEditingSelector('editing_insurance');
export const addingProv = createAddingSelector('adding_provider');
export const editingProv = createEditingSelector('editing_provider');
