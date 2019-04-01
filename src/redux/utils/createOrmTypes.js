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
        ...types(name.toUpperCase(), ['ADD', 'UPDATE', 'DELETE'], apiType),
        ...types(`${name}s`.toUpperCase(), ['REQUEST'], apiType),
    }), { ...initial_types })
};

const apiType = (prefix, name) => {
    const namespace = typeString(prefix, name);
    const success = `${namespace}_SUCCESS`;
    const failure = `${namespace}_FAILURE`;
    return {
        [namespace]: namespace,
        [success]: success,
        [failure]: failure
    }
};

export const createTypes = (names, prefixes) => {
    names = names.constructor === Array ? names : [names];
    return names.reduce((obj, name) => ({
        ...obj, ...types(name.toUpperCase(), prefixes)
    }), {});
};

const types = (namespace, prefixes = [], typeFn = type) => {
    return prefixes.reduce((obj, prefix) => ({
        ...obj, ...typeFn(prefix, namespace)
    }), {});
};

const type = (prefix, name) => {
    const namespace = typeString(prefix, name);
    return { [namespace]: namespace };
};

const typeString = (prefix, namespace) => `${prefix}_${namespace}`;
