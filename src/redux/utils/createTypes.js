// generate common types object to work with utils/composeOrmReducer
// produce
// > {
// >    REQUEST_NAME:   REQUEST_NAME
// >    ADD_NAME:       ADD_NAME
// >    UPDATE_NAME:    UPDATE_NAME
// >    DELETE_NAME:    DELETE_NAME
// >    LOGOUT:         LOGOUT
// >    RESET_FORM:     RESET_FORM
// > }

const initial_types = {
    LOGOUT: "LOGOUT",
    RESET_FORM: "RESET_FORM"
};

export default (names) => {
    names = names.constructor === Array ? names : [names];
    return names.reduce((obj, name) => ({
        ...obj,
        ...apiTypes(name.toUpperCase(), ['ADD', 'UPDATE', 'DELETE']),
        ...apiTypes(`${name}s`.toUpperCase(), ['REQUEST']),
    }), { ...initial_types })
};

const apiTypes = (namespace, prefixes = []) => {
    return prefixes.reduce((obj, prefix) => ({
        ...obj, ...apiType(prefix, namespace)
    }), {});
};

const apiType = (prefix, name) => {
    const namespace = type(prefix, name);
    const success = `${namespace}_SUCCESS`;
    const failure = `${namespace}_FAILURE`;
    return {
        [namespace]: namespace,
        [success]: success,
        [failure]: failure
    }
};

export const type = (prefix, namespace) => `${prefix}_${namespace}`;
