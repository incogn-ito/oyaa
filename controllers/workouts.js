import { Workout } from "../models/workout.js"
import { Exercise } from "../models/exercise.js"

async function index(req, res) {
    try {
       const workouts = await Workout.find({}).populate('exercise') 
       console.log(workouts)
       const exercises = await Exercise.find({})
       res.render('workouts/index', {
        title: 'All Workouts',
        workouts,
        exercises
       })
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
}

async function create(req, res) {
    try {
        console.log(req.body)
        const exercise = await Exercise.findById(req.body.exerciseId)
        req.body.exercise = exercise
        console.log(exercise)
        req.body.owner = req.session.user._id
        await Workout.create(req.body) 
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
}


export {
    index,
    create,
}