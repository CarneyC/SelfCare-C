import { oneToOne, attr, Model } from 'redux-orm';
import types from './types';

class Auth extends Model {
    static reducer(action, Auth, session) {
        switch (action.type) {
           case types.AUTHENTICATION_REQUEST:
               Auth.upsert({
                   id: 0,
                   isAuthenticated: false,
                   isAuthenticating: true,
                   currentUser: null,
                   token: null,
               });
               break;

            case types.AUTHENTICATION_SUCCESS:
                Auth.update({
                    id: 0,
                    isAuthenticated: true,
                    isAuthenticating: false,
                    currentUser: action.user,
                    token: action.token,
                });
                break;

            case types.AUTHENTICATION_FAILURE:
                Auth.update({
                    id: 0,
                    isAuthenticated: false,
                    isAuthenticating: false,
                    currentUser: null,
                    token: null,
                });
                break;

            case types.LOGOUT:
                Auth.update({
                    id: 0,
                    isAuthenticated: false,
                    isAuthenticating: false,
                    currentUser: null,
                    token: null,
                });
                break;
        }
    }
}

Auth.modelName = 'Auth';
Auth.fields = {
    id: attr(),
    isAuthenticated: attr(),
    isAuthenticating: attr(),
    currentUser: oneToOne('User'),
    token: attr(),
    errors: attr(),
};

export default Auth;