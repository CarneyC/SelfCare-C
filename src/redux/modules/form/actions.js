import types from './types'

export const addMed = (status) => {
    return {
        type: types.ADDING_MEDICATION,
        status
    }
};
export const editMed = (id) => {
    return {
        type: types.EDITING_MEDICATION,
        id
    }
};

export const addIns = (status) => {
    return {
        type: types.ADDING_INSURANCE,
        status
    }
};
export const editIns = (id) => {
    return {
        type: types.EDITING_INSURANCE,
        id
    }
};

export const addProv = (status) => {
    return {
        type: types.ADDING_PROVIDER,
        status
    }
};
export const editProv = (id) => {
    return {
        type: types.EDITING_PROVIDER,
        id
    }
};

