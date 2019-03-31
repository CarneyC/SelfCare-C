import { normalize, schema } from 'normalizr';

const medication = new schema.Entity('medications');
const insurance = new schema.Entity('insurances');
const provider = new schema.Entity('providers');

const users = new schema.Entity('users', {
    medications: [medication],
    insurances: [insurance],
    providers: [provider],
});

export default (data) => normalize(data, users);
