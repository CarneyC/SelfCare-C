import { ORM } from 'redux-orm';
import { default as Auth } from './modules/auth/model';
import { default as Behavior } from "./modules/behavior/model";
import { default as Condition } from "./modules/condition/model";
import { default as Error } from "./modules/error/model";
import { default as Form } from "./modules/form/model";
import { default as User } from './modules/user/model';
import { default as Medication } from './modules/medication/model';
import { default as Insurance } from './modules/insurance/model';
import { default as Provider } from './modules/provider/model';


const orm = new ORM();
orm.register(
    Auth,
    Behavior,
    Condition,
    Error,
    Form,
    User,
    Medication,
    Insurance,
    Provider
);

export {
    orm,
    Auth,
    Behavior,
    Condition,
    Error,
    Form,
    User,
    Medication,
    Insurance,
    Provider,
};
