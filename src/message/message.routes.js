import express from 'express'
import { createMessage ,getMessagesById, getAllMessages  } from './user.controller.js'

export const messageRoutes = express.Router()

messageRoutes.use(express.json())

messageRoutes.post('/createMessage', createMessage)

messageRoutes.get('/getMessageById', getMessagesById)

messageRoutes.get('/getAllMessages', getAllMessages)
