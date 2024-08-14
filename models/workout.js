import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema ({
    content: String,
    weather: {
      type: String,
      enum: ['Sunny', 'Partly Cloudy', 'Overcast', 'Rainy', 'Snowy', 'Windy']
    },
    temperature: Number,
   }, {
      timestamps: true
  })

const workoutSchema = new Schema({
    exercise: {type: Schema.Types.ObjectId, ref: "Exercise"},
    // caloriesBurned: Number,
    duration: Number,
    startDate: {
        type: Date,
        default: Date.now,
        get: (date)=> date.toLocaleString()
    },
    comments: [commentSchema],
    owner: {
        type: Schema.Types.ObjectId, 
        ref: "User"
    }   
}, {
  timestamps: true
})

const Workout = mongoose.model('Workout', workoutSchema)

export {
  Workout
}