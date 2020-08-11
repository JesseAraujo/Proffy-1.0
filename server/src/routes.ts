import express from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsControllers'

const routes = express.Router()
const classesControllers = new ClassesController
const connectionsControllers = new ConnectionsController

routes.get('/Classes', classesControllers.index)
routes.post('/Classes', classesControllers.create)

routes.get('/Connections', connectionsControllers.index)
routes.post('/Connections', connectionsControllers.create)


export default routes

