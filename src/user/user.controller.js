import user from './model.js'

export const createUser = async (req, res) => {
  const { name } = req.body
  try {
    const newUser = await user.create(name)
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getUserById = async (req, res) => {
  const { id } = req.params
  try {
    const foundUser = await user.findById(id)
    res.status(200).json(foundUser)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const foundUsers = await user.findAll()
    res.status(200).json(foundUsers)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

export const updateUser = async (req, res) => {
  const { id } = req.params
  const { name } = req.body
  try {
    const updatedUser = await user.update(id, name)
    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteUser = async (req, res) => {
  const { id } = req.params
  try {
    const deletedUser = await user.delete(id)
    res.status(200).json(deletedUser)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
