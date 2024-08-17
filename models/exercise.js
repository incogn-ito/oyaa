import mongoose from 'mongoose'

const Schema = mongoose.Schema

const exerciseSchema = new Schema ({
    name: { 
        type: String, 
        required: true 
      }
    }, {
      timestamps: true
    })

const Exercise = mongoose.model('Exercise', exerciseSchema)

export {
  Exercise
}