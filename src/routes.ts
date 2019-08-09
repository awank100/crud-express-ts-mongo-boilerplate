import express, { Request as IReq, Response as IRes } from 'express'
// Controllers
import * as contactController from './controllers/contactController'

const routes = express.Router()

routes.get('/', (req: IReq, res: IRes) => {
  const result = {
    status: true,
    message: 'Hello, this is express typescript mongo rest api'
  }
  res.json(result)
})

routes.get('/contacts', contactController.list)
routes.post('/contacts', contactController.create)
routes.get('/contacts/:id', contactController.detail)
routes.put('/contacts/:id', contactController.update)
routes.delete('/contacts/:id', contactController.destroy)

export default routes
