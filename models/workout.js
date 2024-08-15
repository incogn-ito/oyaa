import mongoose from 'mongoose'

const Schema = mongoose.Schema

const mealTrackerSchema = new Schema ({
    mealPlan: {
      type: String,
      enum: ['Intermittent Fasting', 'One Meal A Day', 'Carnivore', 'Paleo', 'Keto', 'Custom']
    },
    mealContent: String,
    rating: {
      type: Number, 
      min: 1, 
      max: 5, 
      default: 5
    }
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