import knex from 'knex'

const connection = knex({
    client: 'mysql',
    version: '5.7',
    connection: {
        host: '127.0.0.1',
        user: 'adonis',
        password: '123321',
        database: 'goresidues'
    }
})

export default connection