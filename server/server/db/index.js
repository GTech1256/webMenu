import mongoose from 'mongoose'
import config from '../config/index'

import beverage from './models/beverage'
import fCourse from './models/fCourse'
import sCourse from './models/sCourse'

const { username, password, host, port, dbname} = config.database;

mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${dbname}`)


mongoose.Promise = Promise;


  export default {
    beverage,
    fCourse,
    sCourse
  };
