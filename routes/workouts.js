import { Router } from 'express'
import { isSignedIn } from '../middleware/is-signed-in.js'
import * as workoutsCtrl from '../controllers/workouts.js'

const router = Router()

// public routes


// protected routes
router.get('/', isSignedIn, workoutsCtrl.index)

router.get('/new', isSignedIn, workoutsCtrl.new)

router.get('/:workoutId', isSignedIn, workoutsCtrl.show)

router.post('/', isSignedIn, workoutsCtrl.create)

router.get('/:workoutId/edit', workoutsCtrl.edit)

router.post('/:workoutId/meals', isSignedIn, workoutsCtrl.createMealLog)

router.delete('/:workoutId', isSignedIn, workoutsCtrl.deleteWorkout)

router.delete('/:workoutId/meals/:mealId', isSignedIn, workoutsCtrl.deleteMeal)

export { router }

