import { Router } from 'express'
import { isSignedIn } from '../middleware/is-signed-in.js'
import * as exercisesCtrl from '../controllers/exercises.js'

const router = Router()

// public routes
// router.get('/:userId', usersCtrl.show)

// protected routes
// router.get('/', isSignedIn, usersCtrl.index)


router.get('/new', isSignedIn, exercisesCtrl.new)

router.post('/', isSignedIn, exercisesCtrl.create)

export { router }
