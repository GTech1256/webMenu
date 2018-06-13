'use strict'

// const dbname = process.env.NODE_ENV === 'test' ? 'koatest' : 'koa'

export default {
  app: {
    name: 'something',
    version: '1.0.0'
  },
  database: {
    driver: 'mongo',
    host: 'ds113849.mlab.com',
    port: 13849,
    dbname: 'yellow-bike',
    username: 'server',
    password: 'fT9MqtLn',
    options: {
    }
  },
  server: {
    port: 3030
  },
  static_dir: {
    root: './static',
    options: {}
  },
  session: {
    secretKey: 'yelBik'
  }
}
