import { many, attr, Model } from 'redux-orm';
import * as types from '../actions/actionTypes';

class User extends Model {
    static reducer(action, User, session) {
        switch (action.type) {
            case types.ADD_USER:
                User.create(action.user);
                break;

            case types.LOGOUT:
                User.delete();
                break;
        }
    }
}

User.modelName = 'User';
User.fields = {
    id: attr(),
    name: attr(),
    email: attr(),
    medications: many({ to: 'Medication', relatedName: 'user' }),
    insurances: many({ to: 'Insurance', relatedName: 'user' }),
    providers: many({ to: 'Provider', relatedName: 'user' }),
};

export default User;