import { API_URL } from './apiUrl'
import * as types from './actionTypes'

const medicationLink = `${API_URL}/medications`

// Action Creators
const setMedications = medications => {
  return {
    type: types.REQUEST_MEDICATIONS,
    medications  //collection of medications
  }
}

const addMedication = medication => {
  return {
    type: types.ADD_MEDICATION,
    medication
  }
}

const destroyMedication = medication => {
  return {
    type: types.DELETE_MEDICATION,
    id: medication
  }
}

// Action Creators - FORM

const setSelectedMedication = medication => {
  return {
    type: types.UPDATE_MEDICATION,
    medication
  }
}

export const resetMedicationForm = () => {
  return {
    type: types.RESET_FORM
  }
}

// Async Actions
export const getMedications = () => {
  return (dispatch) => {
    return fetch(`${medicationLink}`, {
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
      },
    })
      .then(response => response.json())
      .then(medications => {
        dispatch(setMedications(medications))
      }) //returns collection of medications
      .catch(error => console.log(error));
  };
}

export const createMedication = medication => {
  return (dispatch) => {
    return fetch(`${medicationLink}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({medication: medication})
    })
      .then(response => response.json())
      .then(medication => {
        dispatch(addMedication(medication))
        dispatch(resetMedicationForm())
      })
      .catch(error => console.log(error))
  };
}

export const updateMedication = (medicationId, medication) => {
  return (dispatch) => {
    return fetch(`${medicationLink}/${medicationId}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({medication: medication})
    })
      .then(response => response.json())
      .then(medication => {
        dispatch(setSelectedMedication(medication))
        dispatch(resetMedicationForm())
      })
      .catch(error => console.log(error))
  };
}

export const deleteMedication = medicationId => {
  return (dispatch) => {
    return fetch(`${medicationLink}/${medicationId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        "Accept":"application/json",
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        dispatch(destroyMedication(medicationId))
      })
      .catch(error => console.log(error))
  };
}

export const updateLikes = (medication) => {
  return (dispatch) => {
    return fetch(`${API_URL}/medications/${medication.id}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({medication: medication})
    })
      .then(response => response.json())
      .then(updatedMedication => {
        dispatch(setSelectedMedication(updatedMedication))
      })
      .catch(error => console.log(error))
  };
}
