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
        res.redirect('/workouts') 
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
}

async function newWorkout(req, res) {
    try {
        const exercises = await Exercise.find({})
        res.render('workouts/new', {
        title: 'Add Workout',
        exercises
        })
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
}

async function show(req, res) {
    const exercise = await Exercise.findById(req.body.exerciseId)
    const workout = await Workout.findById(req.params.workoutId)
    console.log(exercise)
    res.render('workouts/show', {
        title: 'Workout Details',
        exercise,
        workout
    })
}

export {
    index,
    create,
    newWorkout as new,
    show,
    
}