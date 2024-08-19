import { Exercise } from '../models/exercise.js'

async function newExercise(req, res) {
    try {
      const exercises = await Exercise.find({})
      res.render('exercises/new', {
        title: 'Add New Exercise',
        exercises,
      })
    } catch (error) {
      console.log(error)
      res.redirect('/workouts')
    }
  }

  async function create(req, res) {
    try {
      const exercises = await Exercise.create(req.body) 
      res.redirect('/workouts/new') 
    } catch (error) {
      console.log(error)
      res.redirect('/workouts') 
    }
  }

export {
  newExercise as new,
  create,
}