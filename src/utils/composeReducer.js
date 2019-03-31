import * as types from '../actions/actionTypes';

export default (modelName, singular, plural) => {
    const namespace = modelName.toUpperCase();
    singular = singular || modelName.toLowerCase();
    plural = plural || `${singular}s`;
    return (action, Model) => {
        switch (action.type) {
            case types[`REQUEST_${namespace}S`]:
                for (const single of action[plural]) {
                    Model.create(single);
                }
                break;

            case types[`ADD_${namespace}`]:
                Model.create(action[singular]);
                break;

            case types[`UPDATE_${namespace}`]:
                Model.update(action[singular]);
                break;

            case types[`DELETE_${namespace}`]:
                Model.withId(action.id).delete();
                break;
        }
    };
};


