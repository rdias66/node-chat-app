import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class User {
  async create(name) {
    const user = await prisma.user.create({
      data: {
        name
      },
    })
    return user
  }

  async findById(id) {
    const user = await prisma.user.findUnique({
      where: { id },
    })
    return user
  }

  async findAll() {
    return await prisma.user.findAll({
      where: { deletedAt: null },
    })
  }

  async update(id, name) {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { name },
    })
    return updatedUser
  }

  async delete(id) {
    const now = new Date()
    const deletedUser = await prisma.user.update({
      where: { id, deletedAt },
      data : { deletedAt: now },
    })
    return deletedUser
  }
}

export default User
