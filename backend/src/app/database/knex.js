import knex from 'knex';
import config from '../config/knex';

const dbKnex = knex(config);

export default dbKnex;
