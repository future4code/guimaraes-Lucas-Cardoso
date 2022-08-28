import express from 'express'
import { FollowController } from '../controller/FollowController'
import { RecipeController } from '../controller/RecipeController'
import { UserController } from '../controller/UserController'

export const userRouter = express.Router()

const userController = new UserController()
const followController = new FollowController()
const recipeController = new RecipeController()

userRouter.get('/feed', recipeController.getFeed)

userRouter.get('/profile', userController.getProfile)
userRouter.get('/:id', userController.getProfileById)

userRouter.post('/follow', followController.follow)
userRouter.post('/unfollow', followController.unfollow)