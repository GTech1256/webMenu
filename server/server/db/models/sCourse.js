import mongoose from 'mongoose'
import mainSchema from './mainSchema'

const sCourseSchema = mainSchema;

const sCourse = mongoose.model('secondCourse', sCourseSchema)

export default sCourse