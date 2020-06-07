import path from 'path'

module.exports = {
    client: 'mysql',
    version: '5.7',
    connection: {
        host: '127.0.0.1',
        user: 'adonis',
        password: '123321',
        database: 'goresidues'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
}