import { Workout } from "../models/workout.js"
import { Exercise } from "../models/exercise.js"
  

async function index(req, res) {
    try {
    
      const workouts = await Workout.find({owner: req.session.user._id}).populate('exercise') 
      console.log(workouts)
       const exercises = await Exercise.find({})
       res.render('workouts/index', {
        title: 'All Workouts',
        workouts,
        exercises,
       })
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
}

async function home(req, res) {
  try {
    // req.body.owner = req.session.user._id    
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    const workoutCountLast7Days = await Workout.countDocuments({
      owner: req.session.user._id,
      startDate: { $gte: sevenDaysAgo }  // Only count workouts in the last 7 days
    })
    console.log(workoutCountLast7Days)
    res.render('workouts/home', {
      title: 'Welcome',
      workoutCountLast7Days,
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
    const workout = await Workout.findById(req.params.workoutId).populate('exercise')
    res.render('workouts/show', {
        title: 'Workout Details',
        workout
    })
}

async function createMeal(req, res) {
    try {
      let workout = await Workout.findById(req.params.workoutId)
      workout.meals.push(req.body)
      await workout.save()
      res.redirect(`/workouts/${workout._id}`)
    } catch (error) {
      console.log(error)
      res.redirect('/workouts')
    }
  }

  async function deleteWorkout(req, res) {
    try {
      let workout = await Workout.findByIdAndDelete(req.params.workoutId)
      res.redirect(`/workouts`)
    } catch (error) {
      console.log(error)
      res.redirect('/workouts')
    }
  }

  async function deleteMeal(req, res) {
    try {
      let workout = await Workout.findById(req.params.workoutId)
      workout.meals.remove({_id: req.params.mealId})
      await workout.save()
      res.redirect(`/workouts/${workout._id}`)
    } catch (error) {
      console.log(error)
      res.redirect('/workouts')
    }
  }

  async function edit(req, res) {
    try {
      const workout = await Workout.findById(req.params.workoutId).populate('exercise')
      const exercises = await Exercise.find({})    
      res.render('workouts/edit', {
        title: 'Edit Workout',
        workout,
        exercises
      })
    } catch (error) {
      console.log(error)
      res.redirect('/workouts')
    }
  }

  async function update(req, res) {
    try {
    console.log(req.body)
      const workout = await Workout.findByIdAndUpdate(req.params.workoutId, req.body, {new: true})
      res.redirect(`/workouts/${workout._id}`)
    } catch (error) {
      console.log(error)
      res.redirect('/workouts')
    }
  }

export {
    index,
    create,
    newWorkout as new,
    show,
    createMeal,
    deleteMeal,
    deleteWorkout,
    edit,
    update,
    home
}