import types from './types'

// current only used as side-effects from behavior's api action
export const setConditions = conditions => {
    return {
        type: types.REQUEST_CONDITIONS,
        conditions
    }
};

