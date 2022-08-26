import express from 'express'
import { FriendController } from '../controller/FriendController'

export const friendRouter = express.Router()

const friendController = new FriendController()

friendRouter.post('/add/:userId', friendController.addFriend)
friendRouter.get('/:id', friendController.getFriends)
friendRouter.delete('/:userId', friendController.removeFriend)