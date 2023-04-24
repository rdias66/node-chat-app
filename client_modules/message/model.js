import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class Message {
  async create(message, id) {
    const now = new Date()
    const message = await prisma.message.create({
      data: {
        content: message,
        createdAt: now,
        userId: id
      },
    })
    return message
  }

  async getMessagesByUser(id) {
    const messages = await prisma.message.findAll({
      where: { userId: id },
    })
    return messages
  }

  async findAll() {
    return await prisma.user.findAll()
  }

  
}

export default Message
