import { Router } from 'express'
import { isSignedIn } from '../middleware/is-signed-in.js'
import * as workoutsCtrl from '../controllers/workouts.js'

const router = Router()

// public routes


// protected routes
router.get('/', isSignedIn, workoutsCtrl.index)

router.get('/new', isSignedIn, workoutsCtrl.new)

router.post('/', isSignedIn, workoutsCtrl.create)

export { router }

