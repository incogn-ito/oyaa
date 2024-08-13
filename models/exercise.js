import mongoose from 'mongoose'

const Schema = mongoose.Schema

const exerciseSchema = new Schema ({
    content: String,
    weather: {
      type: String,
      enum: ['Sunny', 'Partly Cloudy', 'Overcast', 'Rainy', 'Snowy', 'Windy']
    },
    temperature: Number,
   }, {
      timestamps: true
  })

const Exercise = mongoose.model('Exercise', exerciseSchema)

export {
  Exercise
}