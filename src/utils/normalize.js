import { normalize, schema } from 'normalizr';

const medication = new schema.Entity('medications');
const insurance = new schema.Entity('insurances');
const provider = new schema.Entity('providers');
const users = new schema.Entity('users', {
    medications: [medication],
    insurances: [insurance],
    providers: [provider],
});

const condition = new schema.Entity('conditions');
const behaviors = new schema.Entity('behaviors', {
    conditions: [condition]
});
const behaviorFrame = new schema.Entity('behaviorFrame', {
    behaviors: [behaviors]
});

export const normalizeAuth = data => normalize(data, users);
export const normalizeBehaviors = data => normalize(data, behaviorFrame);

