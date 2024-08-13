import { Exercise } from '../models/exercise.js'

async function newExercise(req, res) {
    try {
      const exercises = await Exercise.find({})
      res.render('exercises/new', {
        title: 'Add Exercise',
        exercises,
      })
    } catch (error) {
      console.log(error)
      res.redirect('/workouts')
    }
  }

  async function create(req, res) {
    try {
      const exercises = await Exercise.create(req.body) //performer variable isn't needed, but get in the habit for React!
      res.redirect('/exercises/new') 
    } catch (error) {
      console.log(error)
      res.redirect('/exercises/new') 
    }
  }

export {
  newExercise as new,
  create,
}