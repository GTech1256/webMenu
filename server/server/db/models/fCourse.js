import mongoose from 'mongoose'
import mainSchema from './mainSchema'

const fCourseSchema = mainSchema;

const fCourse = mongoose.model('firstCourse', fCourseSchema)

export default fCourse