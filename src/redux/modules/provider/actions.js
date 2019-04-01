import { API_URL } from '../../utils/apiUrl';
import types from './types';

const providerLink = `${API_URL}/providers`;

// Action Creators
const setProviders = providers => {
    return {
        type: types.REQUEST_PROVIDERS,
        providers
    }
};

const addProvider = provider => {
    return {
        type: types.ADD_PROVIDER_SUCCESS,
        provider
    }
};

const addProviderFailure = message => {
    return {
        type: types.ADD_PROVIDER_FAILURE,
        message
    }
};

const destroyProvider = provider => {
    return {
        type: types.DELETE_PROVIDER,
        id: provider
    }
};

// Action Creators - FORM
export const setSelectedProvider = provider => {
    return {
        type: types.UPDATE_PROVIDER_SUCCESS,
        provider
    }
};

export const setSelectedProviderFailure = message => {
    return {
        type: types.UPDATE_PROVIDER_FAILURE,
        message
    }
};

export const resetProviderForm = () => {
    return {
        type: types.RESET_FORM
    }
};

// Async Actions
export const getProviders = () => {
    return (dispatch) => {
        return fetch(`${providerLink}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.token}`,
            },
        })
            .then(response => response.json())
            .then(providers => {
                dispatch(setProviders(providers))
            })
            .catch(error => console.log(error));
    };
};

export const createProvider = provider => {
    return (dispatch) => {
        return fetch(`${providerLink}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({provider: provider})
        })
            .then(response => response.json())
            .then(provider => {
                if (provider.id !== undefined) {
                    dispatch(addProvider(provider));
                    dispatch(resetProviderForm())
                } else {
                    dispatch(addProviderFailure(provider.message));
                }
            })
            .catch(error => console.log(error))
    };
};

export const updateProvider = (providerId, provider) => {
    return (dispatch) => {
        return fetch(`${providerLink}/${providerId}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({provider: provider})
        })
            .then(response => response.json())
            .then(provider => {
                if (provider.message === undefined) {
                    dispatch(setSelectedProvider(provider));
                    dispatch(resetProviderForm())
                } else {
                    dispatch(setSelectedProviderFailure(provider.message));
                }
            })
            .catch(error => console.log(error))
    };
};

export const deleteProvider = providerId => {
    return (dispatch) => {
        return fetch(`${providerLink}/${providerId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.token}`,
                "Accept":"application/json",
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                dispatch(destroyProvider(providerId))
            })
            .catch(error => console.log(error))
    };
};
