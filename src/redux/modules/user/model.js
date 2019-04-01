import { many, attr, Model } from 'redux-orm';
import types from './types';

class User extends Model {
    static reducer(action, User, session) {
        switch (action.type) {
            case types.ADD_USER_SUCCESS:
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
    medications: many({ to: 'Condition', relatedName: 'user' }),
    insurances: many({ to: 'Insurance', relatedName: 'user' }),
    providers: many({ to: 'Provider', relatedName: 'user' }),
};

export default User;