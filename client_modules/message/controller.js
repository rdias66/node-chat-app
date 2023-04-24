import message from './model.js'

export const createMessage = async (req, res) => {
  const  content = req.body
  const id = req.params
  try {
    const newMessage = await message.create(content, id)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getMessagesById = async (req, res) => {
  const id  = req.params
  try {
    const foundMessages = await message.getMessagesById(id)
    res.status(200).json(foundMessages)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

export const getAllMessages = async (req, res) => {
  try {
    const allMessages = await  message.findAll()
    res.status(200).json(allMessages)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

