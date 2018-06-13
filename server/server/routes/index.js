import crudRouter from './crudModels'
import adminRoute from './admin'


export default (app) => {
  app.use(crudRouter.middleware())
  app.use(adminRoute.middleware())
}