import mongoose from 'mongoose'

const Schema = mongoose.Schema

const mealTrackerSchema = new Schema ({
    mealContent: String,
    mealType: {
      type: String, 
      enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Drinks']
    },
}, {
      timestamps: true
  })

const workoutSchema = new Schema({
    exercise: {type: Schema.Types.ObjectId, ref: "Exercise"},
    caloriesBurned: Number,
    duration: Number,
    startDate: {
        type: Date,
        default: Date.now,
        get: (date)=> date.toLocaleString(),
        required: true
    },
    meals: [mealTrackerSchema],
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