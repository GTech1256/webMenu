'use strict'

import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import config from '../config'
import routes from '../routes/index'
import err from './error'
import cors from 'kcors'


//const routes = router.routes;

export default (app) => {

  app.use(err)

  

  app.use(serve(config.static_dir.root))

  app.use(bodyParser())

  
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: false,
    allowHeaders: ['Origin, X-Requested-With, Content-Type, Accept']
  }))


  routes(app)


}
