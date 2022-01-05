import passport from 'passport'
import { Router } from 'express';
const router = Router()

import authentication from '../controllers/authentication.js'

//autenticacion

router.route('/signup').post(authentication.newUser)

router.route('/signin').post(authentication.userSingIn)

// router.route('/verifytoken')
//    .get(
//       passport.authenticate('jwt', { session: false }),
//       authentication.verifyToken
//    )

export default router