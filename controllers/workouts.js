import { Workout } from "../models/workout.js"

async function index(req, res) {
    try {
       const workouts = await Workout.find({}) 
       res.render('workouts/index', {
        title: 'All Workouts',
        workouts
       })
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
}



export {
    index,
}