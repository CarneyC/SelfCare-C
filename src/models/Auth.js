import { oneToOne, attr, Model } from 'redux-orm';
import * as types from '../actions/actionTypes';

class Auth extends Model {
    static reducer(action, Auth, session) {
        switch (action.type) {
           case types.AUTHENTICATION_REQUEST:
               Auth.create({
                   isAuthenticated: false,
                   isAuthenticating: true,
                   currentUser: null,
                   token: null,
                   errors: []
               });
               break;

            case types.AUTHENTICATION_SUCCESS:
                Auth.update({
                    isAuthenticated: true,
                    isAuthenticating: false,
                    currentUser: action.user,
                    token: action.token
                });
                break;
        }
    }
}

Auth.modelName = 'Auth';
Auth.fields = {
    isAuthenticated: attr(),
    isAuthenticating: attr(),
    currentUser: oneToOne('User'),
    token: attr(),
    errors: attr(),
};

export default Auth;