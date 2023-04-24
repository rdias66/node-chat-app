import express from 'express'
import { createUser, getUserById, updateUser, deleteUser, getAllUsers } from './user.controller.js'

const app = express()

app.use(express.json())

// Create a user
app.post('/createUser', createUser)

// Get a user by ID
app.get('/getUser/:id', getUserById)

// Get all users
app.get('/users/:id', getAllUsers)

// Update a user
app.put('/updateUser/:id', updateUser)

// Delete a user
app.delete('/deleteUser/:id', deleteUser)

app.listen(3000, () => console.log('Server running on port 3000'))
