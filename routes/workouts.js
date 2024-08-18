import { Router } from 'express'
import { isSignedIn } from '../middleware/is-signed-in.js'
import * as workoutsCtrl from '../controllers/workouts.js'

const router = Router()

// public routes


// protected routes
router.get('/', isSignedIn, workoutsCtrl.index)

router.get('/home', isSignedIn, workoutsCtrl.home)

router.get('/new', isSignedIn, workoutsCtrl.new)

router.get('/:workoutId', isSignedIn, workoutsCtrl.show)

router.get('/:workoutId/edit', isSignedIn, workoutsCtrl.edit)

router.post('/', isSignedIn, workoutsCtrl.create)

router.post('/:workoutId/meals', isSignedIn, workoutsCtrl.createMeal)

router.delete('/:workoutId', isSignedIn, workoutsCtrl.deleteWorkout)

router.delete('/:workoutId/meals/:mealId', isSignedIn, workoutsCtrl.deleteMeal)

router.put('/:workoutId', isSignedIn, workoutsCtrl.update)


export { router }

