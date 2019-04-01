import { attr, Model } from 'redux-orm';

import { default as authTypes } from '../auth/types';
import { default as medicationTypes } from '../medication/types';
import { default as insuranceTypes } from '../insurance/types';
import { default as providerTypes } from '../provider/types';

// intercept every failure action

class Error extends Model {
    static reducer(action, Error, session) {
        switch (action.type) {
           case authTypes.AUTHENTICATION_FAILURE:
               Error.upsert({
                   id: 0,
                   auth_error: true,
               });
               break;

            case authTypes.AUTHENTICATION_SUCCESS:
                Error.upsert({
                    id: 0,
                    auth_error: false,
                });
                break;

            case medicationTypes.ADD_MEDICATION_FAILURE:
            case medicationTypes.UPDATE_MEDICATION_FAILURE:
                Error.upsert({
                    id: 0,
                    medication_error: action.message,
                });
                break;

            case medicationTypes.ADD_MEDICATION_SUCCESS:
            case medicationTypes.UPDATE_MEDICATION_SUCCESS:
                Error.upsert({
                    id: 0,
                    medication_error: false,
                });
                break;

            case insuranceTypes.ADD_INSURANCE_FAILURE:
            case insuranceTypes.UPDATE_INSURANCE_FAILURE:
                Error.upsert({
                    id: 0,
                    insurance_error: action.message,
                });
                break;

            case insuranceTypes.ADD_INSURANCE_SUCCESS:
            case insuranceTypes.UPDATE_INSURANCE_SUCCESS:
                Error.upsert({
                    id: 0,
                    insurance_error: false,
                });
                break;

            case providerTypes.ADD_PROVIDER_FAILURE:
            case providerTypes.UPDATE_PROVIDER_FAILURE:
                Error.upsert({
                    id: 0,
                    provider_error: action.message,
                });
                break;

            case providerTypes.ADD_PROVIDER_SUCCESS:
            case providerTypes.UPDATE_PROVIDER_SUCCESS:
                Error.upsert({
                    id: 0,
                    provider_error: false,
                });
                break;
        }
    }
}

Error.modelName = 'Error';
Error.fields = {
    id: attr(),
    auth_error: attr(),
    medication_error: attr(),
    insurance_error: attr(),
    provider_error: attr(),
};

export default Error;