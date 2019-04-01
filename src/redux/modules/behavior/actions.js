import { API_URL } from '../../utils/apiUrl';
import types from './types';

import { normalizeBehaviors as normalize } from "../../utils/normalize";
import { setConditions } from "../condition/actions";

// Action Creators
const setBehaviors = behaviors => {
    return {
        type: types.REQUEST_BEHAVIORS,
        behaviors
    }
};

export const getBehaviors = () => {
    return (dispatch) => {
        return fetch(`${API_URL}/behaviors`, {
            headers: {
                "Authorization": `Bearer ${localStorage.token}`,
            },
        })
            .then(response => response.json())
            .then(originalData => {
                const data = {
                    id: 0, behaviors: originalData
                };
                const { behaviors, conditions } = normalize(data).entities;

                // slight side effects on condition module
                dispatch(setConditions(Object.values(conditions)));
                dispatch(setBehaviors(Object.values(behaviors)));
            })
            .catch(error => console.log(error));
    };
};

