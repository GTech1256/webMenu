import mongoose from 'mongoose'
import mainSchema from './mainSchema'

const beverageSchema = mainSchema;

const beverage = mongoose.model('beverage', beverageSchema)

export default beverage