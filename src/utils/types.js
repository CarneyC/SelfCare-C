export default (names) => {
    return names.reduce((obj, name) => ({
        ...obj,
        ...apiTypes(name.toUpperCase(), ['ADD', 'UPDATE', 'DELETE']),
        ...apiTypes(`${name}s`.toUpperCase(), ['REQUEST']),
    }), {})
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

const type = (prefix, namespace) => `${prefix}_${namespace}`;
