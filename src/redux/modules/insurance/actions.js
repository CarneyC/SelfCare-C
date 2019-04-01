import { API_URL } from '../../utils/apiUrl';
import types from './types';

const insuranceLink = `${API_URL}/insurances`;

// Action Creators
const setInsurances = insurances => {
    return {
        type: types.REQUEST_INSURANCES,
        insurances
    }
};

const addInsurance = insurance => {
    return {
        type: types.ADD_INSURANCE_SUCCESS,
        insurance
    }
};

const addInsuranceFailure = message => {
    return {
        type: types.ADD_INSURANCE_FAILURE,
        message
    }
};

const destroyInsurance = insurance => {
    return {
        type: types.DELETE_INSURANCE,
        id: insurance
    }
};

// Action Creators - FORM
export const setSelectedInsurance = insurance => {
    return {
        type: types.UPDATE_INSURANCE_SUCCESS,
        insurance
    }
};

export const setSelectedInsuranceFailure = message => {
    return {
        type: types.UPDATE_INSURANCE_FAILURE,
        message
    }
};

export const resetInsuranceForm = () => {
    return {
        type: types.RESET_FORM
    }
};

// Async Actions
export const getInsurances = () => {
    return (dispatch) => {
        return fetch(`${insuranceLink}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.token}`,
            },
        })
            .then(response => response.json())
            .then(insurances => {
                dispatch(setInsurances(insurances))
            })
            .catch(error => console.log(error));
    };
};

export const createInsurance = insurance => {
    return (dispatch) => {
        return fetch(`${insuranceLink}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({insurance: insurance})
        })
            .then(response => response.json())
            .then(insurance => {
                if (insurance.id !== undefined) {
                    dispatch(addInsurance(insurance));
                    dispatch(resetInsuranceForm());
                } else {
                    dispatch(addInsuranceFailure(insurance.message));
                }
            })
            .catch(error => console.log(error))
    };
};

export const updateInsurance = (insuranceId, insurance) => {
    return (dispatch) => {
        return fetch(`${insuranceLink}/${insuranceId}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({insurance: insurance})
        })
            .then(response => response.json())
            .then(insurance => {
                if (insurance.message === undefined) {
                    dispatch(setSelectedInsurance(insurance));
                    dispatch(resetInsuranceForm());
                } else {
                    dispatch(setSelectedInsuranceFailure(insurance.message));
                }
            })
            .catch(error => console.log(error))
    };
};

export const deleteInsurance = insuranceId => {
    return (dispatch) => {
        return fetch(`${insuranceLink}/${insuranceId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.token}`,
                "Accept":"application/json",
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                dispatch(destroyInsurance(insuranceId))
            })
            .catch(error => console.log(error))
    };
};
