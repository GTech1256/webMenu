'use strict'

import Koa from 'koa'
import config from './config'
import db from './db/index' // хз где еще вызвать
import middlewares from './middleware/index'

const app = new Koa()
const host = process.env.HOST
const port = process.env.PORT || config.server.port

middlewares(app)

app.listen(port, host)
