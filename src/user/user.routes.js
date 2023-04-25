import express from 'express'
import { createUser, getUserById, updateUser, deleteUser, getAllUsers } from './user.controller.js'

export const userRoutes = express.Router()



// Create a user
userRoutes.post('/createUser', createUser)

// Get a user by ID
userRoutes.get('/getUser/:id', getUserById)

// Get all users
userRoutes.get('/users/:id', getAllUsers)

// Update a user
userRoutes.put('/updateUser/:id', updateUser)

// Delete a user
userRoutes.delete('/deleteUser/:id', deleteUser)
