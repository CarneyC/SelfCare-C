import { API_URL } from './apiUrl'
import types from './actionTypes'

import { normalizeBehaviors as normalize } from "../utils/normalize";

// Action Creators
const setBehaviors = behaviors => {
  return {
    type: types.REQUEST_BEHAVIORS,
    behaviors
  }
};

const setConditions = conditions => {
    return {
        type: types.REQUEST_CONDITIONS,
        conditions
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
        // console.log(behaviors)
        dispatch(setConditions(Object.values(conditions)));
        dispatch(setBehaviors(Object.values(behaviors)));
      })
      .catch(error => console.log(error));
  };
};

