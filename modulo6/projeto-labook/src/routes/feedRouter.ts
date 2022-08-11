import express from 'express'
import { PostController } from '../controller/PostController'

export const feedRouter = express.Router()

const postController = new PostController()

feedRouter.get('/:id', postController.getFeed)