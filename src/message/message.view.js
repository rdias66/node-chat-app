import express from 'express'
import { createMessage ,getMessagesById, getAllMessages  } from './controller.js'

const app = express()

app.use(express.json())

app.post('/createMessage', createMessage)

app.get('/getMessageById', getMessagesById)

app.get('/getAllMessages', getAllMessages)
