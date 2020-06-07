import express from 'express'

const routes = express.Router()

routes.get('/users', (request, response) => {
    response.json(['Rhadamez', 'Sash', 'Pedraum'])
})

export default routes