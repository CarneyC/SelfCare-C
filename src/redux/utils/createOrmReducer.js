// generate common reducer logics intended to work with utils/createOrmTypes
// expect a type structure of
// > {
// >    REQUEST_NAME:           REQUEST_NAME
// >    ADD_NAME_SUCCESS:       ADD_NAME
// >    UPDATE_NAME_SUCCESS:    UPDATE_NAME
// >    DELETE_NAME:            DELETE_NAME
// >    LOGOUT:                 LOGOUT
// > }

export default (modelName, types = {}, singular, plural) => {
    const namespace = modelName.toUpperCase();
    singular = singular || modelName.toLowerCase();
    plural = plural || `${singular}s`;
    return (action, Model) => {
        switch (action.type) {
            case types[`REQUEST_${namespace}S`]:
                for (const single of action[plural]) {
                    // upsert to avoid duplicate records
                    Model.upsert(single);
                }
                break;

            case types[`ADD_${namespace}_SUCCESS`]:
                Model.create(action[singular]);
                break;

            case types[`UPDATE_${namespace}_SUCCESS`]:
                Model.update(action[singular]);
                break;

            case types[`DELETE_${namespace}`]:
                Model.withId(action.id).delete();
                break;

            case types.LOGOUT:
                Model.all().toModelArray().forEach(single => single.delete());
                break;
        }
    };
};


