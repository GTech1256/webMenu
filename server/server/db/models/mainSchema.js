import mongoose from 'mongoose'

export default new mongoose.Schema({
    name:{
      type:String,
      required:true,
    },
    price:{
      type:Number,
      required:true,
    },
  
    picture:String,
    description: String,
})
