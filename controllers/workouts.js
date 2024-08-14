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

async function create(req, res) {
    try {
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