import { ORM } from 'redux-orm';
import { default as Auth } from './Auth';
import { default as User } from './User';
import { default as Medication } from './Medication';
import { default as Insurance } from './Insurance';
import { default as Provider } from './Provider';


const orm = new ORM();
orm.register(Auth, User, Medication, Insurance, Provider);

export {
    orm,
    Auth,
    User,
    Medication,
    Insurance,
    Provider,
};
